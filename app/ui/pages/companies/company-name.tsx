import clsx from "clsx";
import { Size } from "../../components/city-name";

export const CompanyName = ({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: Size;
}) => {
  const sizeClasses = {
    sm: "text-md",
    md: "text-lg",
    lg: "text-xl",
  };
  return (
    <div className={clsx("font-bold text-primary-900", sizeClasses[size])}>
      {children}
    </div>
  );
};
