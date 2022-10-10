interface ButtonText {
  text: String;
  btnWidth: String;
  btnColor: String;
  radius?: String;
  btnHeight?: String;
  fontSize?: String;
  onClick?: () => void;
}

export default function Buttondefault({
  text,
  btnWidth,
  btnColor,
  btnHeight,
  onClick,
  fontSize,
  radius,
}: ButtonText) {
  return (
    <>
      <button
        className={
          "BTN flex justify-center items-center bg-blue-600 h-12 rounded-md hover:bg-blue-500"
        }
        onClick={onClick}
      >
        <span className="btnText text-white text-lg ">{text}</span>
      </button>
      <style jsx>
        {`
          .BTN {
            width: ${btnWidth};
            height: ${btnHeight};
            background-color: ${btnColor};
            border-radius: ${radius};
          }
          .btnText {
            font-size: ${fontSize};
          }
        `}
      </style>
    </>
  );
}
