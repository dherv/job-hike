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
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "block hover:bg-primary-900 hover:text-white w-full py-2 px-4 rounded",
        { "bg-secondary-400 text-white": isActive }
      )}>
      {children}
    </Link>
  );
};
