import Link from "next/link";

export const LinkButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex w-fit bg-primary-900 text-white hover:bg-primary-700 py-2 px-6 rounded">
      {children}
    </Link>
  );
};
