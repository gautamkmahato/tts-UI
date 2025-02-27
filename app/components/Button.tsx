import { FC } from "react";
import { ArrowRight } from "lucide-react"; // Example icon

type ButtonProps = {
  text: string;
  icon?: boolean; // Whether to show an icon
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, icon = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600  font-semibold flex items-center justify-center hover:from-blue-600 hover:to-purple-700 duration-300"

    >
      {icon && (
        <ArrowRight className="mr-2 text-xl" /> // Icon
      )}
      <span>{text}</span>
    </button>
  );
};

export default Button;
