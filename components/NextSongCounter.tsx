type Props = {
  remainingTime: number;
};

export const NextSongCounter = (props: Props) => {
  const { remainingTime } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold text-xs">Next song in..</div>

      <div className="mt-6 relative w-20 h-20 bg-primary/80 rounded-full">
        <div className="circle absolute rounded-full w-full h-full"></div>
        <div className="absolute flex justify-center items-center font-bold w-full h-full text-5xl">
          {remainingTime}
        </div>
      </div>
    </div>
  );
};
