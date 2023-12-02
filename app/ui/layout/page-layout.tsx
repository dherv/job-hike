import { PageTitle } from "./page-title";

export const PageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <main className="flex flex-col gap-16 my-12">
      <PageTitle>{title}</PageTitle>
      {children}
    </main>
  );
};
