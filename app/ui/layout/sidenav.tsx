import Link from "next/link";
import { Logo } from "./logo";
import { LogoutButton } from "./logout-button";

export const SideNav = () => {
  return (
    <nav className="fixed h-screen left-0 p-4 flex flex-col gap-4 justify-between">
      <div>
        <Link href="/dashboard" className="block py-4">
          <Logo />
        </Link>
        <div className="border-primary-500 border-b my-16"></div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/dashboard/jobs"
              className="block hover:bg-primary-900 hover:text-white w-full py-2 px-4 rounded">
              jobs
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/companies"
              className="block hover:bg-primary-900 hover:text-white w-full py-2 px-4 rounded">
              companies
            </Link>
          </li>
        </ul>
      </div>
      <LogoutButton />
    </nav>
  );
};
