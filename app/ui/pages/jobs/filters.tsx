import { FC } from "react";

export const filterInput: FC<{ name: string }> = ({ name }) => {
  return <input type="text" name={name} />;
};

export const filterSelect: FC<{
  options: { value: string; text: string }[];
}> = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
