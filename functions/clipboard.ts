import { isClientSide } from ".";

export const copyTextToClipboard = async (text: string) => {
  if (isClientSide()) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    }

    return document.execCommand("copy", true, text);
  }
};
