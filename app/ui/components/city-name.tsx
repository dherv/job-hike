"use client";
import { MapPinIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export type Size = "sm" | "md" | "lg";
export const CityName = ({
  city,
  size = "md",
}: {
  city: string;
  size?: Size;
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  const mapIconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-sm font-medium text-secondary-500",
        sizeClasses[size]
      )}>
      <MapPinIcon className={mapIconSizeClasses[size]} />
      <span className={sizeClasses[size]}>{city}</span>
    </div>
  );
};
