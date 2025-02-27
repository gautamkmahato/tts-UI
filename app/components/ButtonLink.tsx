import { FC } from "react";
import { ArrowRight } from "lucide-react"; // Example icon
import Link from "next/link";

type ButtonProps = {
  text: string;
  icon?: boolean; // Whether to show an icon
  //onClick: () => void;
};

const ButtonLink: FC<ButtonProps> = ({ text, icon = false }) => {
  return (
    <Link
      href="www.google.com"
      className="px-6 py-3 bg-gradient-to-r from-buttonSecondary to-buttonPrimary text-white rounded-md flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition duration-300"
    >
      {icon && (
        <ArrowRight className="mr-2 text-xl" /> // Icon
      )}
      <span>{text}</span>
    </Link>
  );
};

export default ButtonLink;
