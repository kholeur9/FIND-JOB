import clsx from 'clsx';

interface InputFormProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  height: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ type, name, placeholder, value, onChange, error, height}) => {
  return (
    <div className="mt-2.5 mb-2.5 w-full">
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(`
          w-full
          p-2.5
          rounded-md
          border
          border-gray-400
          focus:outline-none focus:ring-2 focus:border-sky-500
          outline-none`,
          error && 'border-[1.5px] border-red-600 placeholder-red-600',
          height ? 'h-[60px]' : 'h-[50px]',
          )}
        autoComplete="off"
      />
      <span className="text-sm text-red-600 font-semibold">{error}</span>
    </div>
  );
};