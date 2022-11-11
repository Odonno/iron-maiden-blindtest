const fs = require("fs");

// extract atoms from all *.ts files in the current directory and subdirectories
const excludedFolders = [
  "node_modules",
  "dist",
  "scripts",
  "public",
  ".next",
  ".vscode",
  ".git",
];

const extractAtomsFromFiles = (path = ".") => {
  const files = fs.readdirSync(path, { withFileTypes: true });

  return files.flatMap((file) => {
    if (file.isDirectory()) {
      const isExcluded = excludedFolders.includes(file.name);
      if (isExcluded) {
        return [];
      }

      return extractAtomsFromFiles(`${path}/${file.name}`);
    }

    if (file.name.endsWith(".ts")) {
      const content = fs.readFileSync(`${path}/${file.name}`, "utf8");

      const regex = /export const ((.+)Atom)/g;
      const matches = content.match(regex);

      if (matches) {
        return matches.map((match) => {
          return match.replace("export const ", "");
        });
      }
    }

    return [];
  });
};

const atoms = extractAtomsFromFiles();

// for each atom, find at least one reference in the *.ts|tsx files
const isAtomReferenced = (atomName, path = ".") => {
  const files = fs.readdirSync(path, { withFileTypes: true });

  return files.some((file) => {
    if (file.isDirectory()) {
      const isExcluded = excludedFolders.includes(file.name);
      if (isExcluded) {
        return;
      }

      return isAtomReferenced(atomName, `${path}/${file.name}`);
    }

    if (file.name.endsWith(".ts") || file.name.endsWith(".tsx")) {
      const content = fs.readFileSync(`${path}/${file.name}`, "utf8");

      const pattern = `get\\(\\s*(.+[.])*${atomName}\\s*\\)|useAtom\\(\\s*(.+[.])*${atomName}\\s*\\)`;
      const regex = new RegExp(pattern, "g");
      const matches = content.match(regex);

      return !!matches;
    }

    return false;
  });
};

const unusedAtoms = atoms.filter((atom) => {
  return !isAtomReferenced(atom);
});

// display output
if (unusedAtoms.length > 0) {
  console.log(`${unusedAtoms.length} unused atoms:`);

  unusedAtoms.forEach((atom) => {
    console.log(`- ${atom}`);
  });
} else {
  console.log("No unused atoms found...");
}
