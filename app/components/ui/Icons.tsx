interface IconProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Icons: React.FC<IconProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="px-2.5 py-2.5 rounded-full">
      { children }
    </button>
  );
};