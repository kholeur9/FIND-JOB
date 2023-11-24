interface ButttonFormProps {
  children: React.ReactNode;
  type: 'submit' | 'reset';
  className?: string;
}

export const ButtonForm: React.FC<ButttonFormProps> = ({ children, type, className}) => {
  return (
    <button type={type} className={`w-full border-0 font-semibold rounded-full text-white text-[18px] bg-sky-500 py-2.5 my-3`}>
      {children}
    </button>
  );
};