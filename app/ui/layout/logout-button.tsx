import { signOut } from "@/auth";
import { PowerIcon } from "@heroicons/react/24/outline";

export const LogoutButton = () => {
  return (
    <form
      className="self-center"
      action={async () => {
        "use server";
        await signOut();
      }}>
      <button
        data-test-id="sign-out"
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-primary-50 p-3 text-sm font-medium hover:bg-primary-100  md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-5" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  );
};
