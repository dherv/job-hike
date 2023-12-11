"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LinkNav = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={clsx({
        "block w-full py-2 px-4 rounded transition-all ": true,
        "bg-secondary-500 text-white": isActive,
        "hover:bg-primary-500 hover:bg-opacity-10": !isActive,
      })}>
      {children}
    </Link>
  );
};
