interface ButtonText {
  text: String;
  btnWidth: String;
}

export default function Button({ text, btnWidth }: ButtonText) {
  return (
    <>
      <div className="BTN flex justify-center items-center bg-blue-600 h-12 rounded-md hover:bg-blue-500">
        <span className="text-white text-lg ">{text}</span>
      </div>
      <style jsx>
        {`
          .BTN {
            width: ${btnWidth};
          }
        `}
      </style>
    </>
  );
}
