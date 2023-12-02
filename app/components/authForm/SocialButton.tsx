import { IconType } from "react-icons";

interface SocialButtonProps {
  icon: IconType;
  onClick?: () => void;
  children: React.ReactNode;
}

export const SocialButton: React.FC<SocialButtonProps> = ({icon: Icon, onClick, children}) => {
  return (
    <button type="button" onClick={onClick} className="px-4 py-3 flex gap-2 font-semibold text-gray-500 items-center justify-center bg-white shadow-sm outline-none w-[50%] border border-w-2 rounded-md">
      <Icon size={24} />
      <span>{children}</span>
    </button>
  );
}