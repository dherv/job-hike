import { JobWithCompany } from "../../../lib/types";
import { CityName } from "../../components/city-name";
import { CompanyLogo } from "./company-logo";
import { CompanyName } from "./company-name";

export const CompanyHeader = ({
  company,
}: {
  company: JobWithCompany["company"];
}) => {
  console.log(company);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <CompanyLogo logo={company.logo} alt={company.name} size="lg" />
        <CompanyName size="lg">{company.name}</CompanyName>
      </div>
      <CityName city={company.city.name} size="lg" />
    </div>
  );
};
