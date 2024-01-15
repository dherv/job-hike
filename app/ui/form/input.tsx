import clsx from "clsx";

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
    <label
      htmlFor={name}
      className="block w-24 shrink-0 font-light text-primary-400 mb-1 lowercase">
      {children}
    </label>
  );
};

export const InputWithLabel = ({ children, className }: any) => {
  return (
    <div className={clsx(`flex items-center gap-4 w-full`, className)}>
      {children}
    </div>
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
    <InputWithLabel>
      <Label name={name}>{label}</Label>
      <select
        className="input"
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
    </InputWithLabel>
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
    <InputWithLabel>
      <Label name={name}>{label}</Label>
      <textarea
        className="input"
        id={name}
        name={name}
        aria-describedby={`${name}-error`}
        defaultValue={props.defaultValue}
      />
      <Errors name={name} errors={errors} />
    </InputWithLabel>
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
    <InputWithLabel>
      <Label name={name}>{label}</Label>
      <input
        className="input"
        id={label}
        type={props.type}
        name={name}
        aria-describedby={`${name}-error`}
        defaultValue={props.defaultValue}
      />
      <Errors name={name} errors={errors} />
    </InputWithLabel>
  );
};
