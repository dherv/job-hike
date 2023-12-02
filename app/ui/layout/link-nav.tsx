import Link from "next/link";

export const LinkNav = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="block hover:bg-primary-900 hover:text-white w-full py-2 px-4 rounded">
      {children}
    </Link>
  );
};
