export const Pill = ({ children }: { children: string }) => {
  return (
    <div className="px-2 py-1 text-xs max-w-fit font-light text-secondary-400 bg-secondary-400 bg-opacity-10 rounded-full">
      {children}
    </div>
  );
};
