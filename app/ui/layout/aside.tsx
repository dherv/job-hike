import { Nav } from "./nav";

export const Aside = () => {
  return (
    <aside className="fixed h-screen left-0 w-[250px] border-primary-200 border-r">
      <Nav />
    </aside>
  );
};
