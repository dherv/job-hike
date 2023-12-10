export const CardApplicationDate = ({ children }: { children: Date; }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    children
  );

  return (
    <div className="text-xs text-primary-400 font-light">{formattedDate}</div>
  );
};
