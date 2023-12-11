import { PageTitle } from "./page-title";

export const PageLayout = ({
  children,
  title,
  button,
}: {
  children: React.ReactNode;
  title: string;
  button?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-16 my-12">
      <div className="flex justify-between items-center">
        <PageTitle>{title}</PageTitle>
        {button ? button : null}
      </div>
      {children}
    </div>
  );
};
