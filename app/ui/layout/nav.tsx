import Link from "next/link";
import { LinkNav } from "./link-nav";
import { Logo } from "./logo";
import { LogoutButton } from "./logout-button";

export const Nav = () => {
  return (
    <nav className="flex h-full p-4 flex-col gap-4 justify-between">
      <div>
        <Link
          href="/dashboard"
          className="block border-b border-primary-200 px-8 py-8 -mx-4">
          <Logo />
        </Link>
        <ul className="flex flex-col gap-2 py-8">
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
