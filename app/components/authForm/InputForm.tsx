import clsx from 'clsx';

interface InputFormProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  // Ajout d'un point-virgule ici
}

export const InputForm: React.FC<InputFormProps> = ({ type, name, placeholder, value, onChange, className, error, inputClassName }) => {
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
          outline-none`,
          error && 'border-2 border-red-500 placeholder-red-500'
          )}
        autoComplete="off"
      />
      <span className="text-sm text-red-500 font-semibold">{error}</span>
    </div>
  );
};