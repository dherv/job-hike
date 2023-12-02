export const Errors = ({
  name,
  errors,
}: {
  name: string;
  errors?: string[];
}) => {
  return (
    <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
      {errors?.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
};

export const Label = ({
  name,
  children,
}: {
  name: string;
  children: string;
}) => {
  return (
    <label htmlFor={name} className="block font-medium capitalize mb-1">
      {children}
    </label>
  );
};

export const Select = ({
  label,
  name,
  options,
  errors,
  ...props
}: {
  label: string;
  name: string;
  options: { key: string; value: string }[];
  errors?: string[];
} & React.InputHTMLAttributes<HTMLSelectElement>) => {
  return (
    <div>
      <Label name={name}>{label}</Label>
      <select
        className="outline-none border-2 border-gray-200 rounded-md px-2 py-1 w-full hover:cursor-pointer"
        id={name}
        name={name}
        defaultValue={props.defaultValue}
        aria-describedby={`${name}-error`}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>
      <Errors name={name} errors={errors} />
    </div>
  );
};

export const TextArea = ({
  label,
  name,
  errors,
  ...props
}: {
  label: string;
  name: string;
  errors?: string[];
} & React.InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div>
      <Label name={name}>{label}</Label>
      <textarea
        className="outline-none border-2 border-gray-200 rounded-md px-2 py-1 w-full hover:cursor-pointer"
        id={name}
        name={name}
        aria-describedby={`${name}-error`}
        defaultValue={props.defaultValue}
      />
      <Errors name={name} errors={errors} />
    </div>
  );
};
export const Input = ({
  label,
  errors,
  name,
  ...props
}: {
  label: string;
  name: string;
  errors?: string[];
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <Label name={name}>{label}</Label>
      <input
        className="outline-none border-2 border-gray-200 rounded-md px-2 py-1 w-full hover:cursor-pointer"
        id={label}
        type={props.type}
        name={name}
        aria-describedby={`${name}-error`}
        defaultValue={props.defaultValue}
      />
      <Errors name={name} errors={errors} />
    </div>
  );
};
