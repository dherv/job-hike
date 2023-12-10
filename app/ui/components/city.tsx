import { MapPinIcon } from "@heroicons/react/24/solid";

export const City = ({ city }: { city: string; }) => {
  return (
    <div className="flex items-center gap-1 text-sm font-medium text-secondary-200">
      <MapPinIcon className="w-4 h-4" />
      {city}
    </div>
  );
};
