const Right = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="m220.24 132.24-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z" />
  </svg>
);

const RightArrow = () => {
  return (
    <div className="relative w-8 h-8 p-2 ml-4 rounded-full overflow-hidden bg-[#fdfbf6]">
      <Right
        width="25"
        height="25"
        className="absolute top-1/2 -translate-y-1/2 -left-full translate-x-0 group-hover:translate-x-[2.2rem] transition-transform duration-500 fill-background"
      />
      <Right
        width="25"
        height="25"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:translate-x-[2.2rem] transition-transform duration-500 fill-background"
      />
    </div>
  );
};

export default RightArrow;
