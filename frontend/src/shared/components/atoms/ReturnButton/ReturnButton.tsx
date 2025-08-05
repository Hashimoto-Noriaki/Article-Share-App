type PropsType = {
  children: React.ReactNode;
};

export const ReturnButton = ({ children }: PropsType) => {
  return (
    <button className="w-[200px] mt-8 border-2 border-solid border-cyan-100 bg-cyan-300 hover:bg-cyan-400 font-bold px-10 py-5 rounded-full shadow transition hover:">
      {children}
    </button>
  );
};
