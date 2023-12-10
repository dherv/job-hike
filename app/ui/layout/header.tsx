import { getSessionUser } from "../../api/auth/actions";
import { Avatar } from "./avatar";

export const Header = async () => {
  const user = await getSessionUser();
  return (
    <header className="flex items-center justify-between border-primary-200 border-b px-8 py-4">
      <h1 className="text-primary-900 text-3xl font-bold"></h1>
      <Avatar avatar={user?.avatar} />
    </header>
  );
};
