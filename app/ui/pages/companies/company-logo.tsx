"use client";
import tempLogo from "@/app/lib/logos/logoipsum-241.svg";
import clsx from "clsx";
import Image from "next/image";
import { Size } from "../../components/city-name";
export const CompanyLogo = ({
  logo,
  alt,
  size = "md",
}: {
  logo?: string | null;
  alt: string;
  size?: Size;
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-12 w-12",
  };
  return logo ? (
    <Image
      width={48}
      height={48}
      className={clsx("rounded-full", sizeClasses[size])}
      src={tempLogo}
      alt={alt}
    />
  ) : null;
};
