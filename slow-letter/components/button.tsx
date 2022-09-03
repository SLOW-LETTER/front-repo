interface ButtonProps {
  buttonSize: string
  text: string
}

export default function Button({buttonSize, text}: ButtonProps) {
  const smallBtn = {
    btn: "flex justify-center items-center bg-blue-600 w-32 h-10 rounded-md hover:bg-blue-500",
    text: "text-white text-md"}
  return (
    <>
      <div className={buttonSize === "sm" ? smallBtn.btn : "flex justify-center items-center bg-blue-600 w-44 h-12 rounded-md hover:bg-blue-500"}>
        <span className={buttonSize === "sm" ? smallBtn.text : "text-white text-lg"}>{text}</span>
      </div>
    </>
  );
}
