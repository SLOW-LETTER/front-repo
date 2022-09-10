import { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  buttonSize?: string;
  text?: string;
  onClick?: MouseEventHandler
}

export default function CustomButton({className="none" , buttonSize, text, onClick }: ButtonProps) {
  const smallBtn = {
    btn: `flex justify-center items-center bg-blue-600 w-32 h-10 rounded-md hover:bg-blue-500 ${className}`,
    text: "text-white text-md",
  };
  return (
    <>
      <button
        className={
          buttonSize === "sm"
            ? smallBtn.btn
            : `flex justify-center items-center bg-blue-600 w-44 h-12 rounded-md hover:bg-blue-500 ${className}`
        }
        onClick={onClick}
      >
        <span
          className={buttonSize === "sm" ? smallBtn.text : "text-white text-lg"}
        >
          {text}
        </span>
      </button>
    </>
  );
}
