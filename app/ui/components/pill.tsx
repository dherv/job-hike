export const Pill = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="px-2 py-1 text-xs font-light text-secondary-400 bg-secondary-200 bg-opacity-10 rounded-full">
      {children}
    </div>
  );
};
