import { ReactNode } from "react";
import { PageTitle } from "./page-title";

export const PageLayout = ({
  children,
  title,
  headerButton
}: {
  children: ReactNode;
  title: string;
  headerButton?: ReactNode
}) => {
  return (
    <main className="flex flex-col gap-16 my-12">
      <header className="flex justify-between items-center">
        <PageTitle>{title}</PageTitle>
        {headerButton ? headerButton : null}
      </header>
      {children}
    </main>
  );
};
