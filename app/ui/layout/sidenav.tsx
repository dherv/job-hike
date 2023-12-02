import Link from "next/link";
import { LinkNav } from "./link-nav";
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
            <LinkNav href="/dashboard/jobs">jobs</LinkNav>
          </li>
          <li>
            <LinkNav href="/dashboard/companies">companies</LinkNav>
          </li>
        </ul>
      </div>
      <LogoutButton />
    </nav>
  );
};
