interface ButtonText {
  text: String
}

export default function Button({text}: ButtonText) {
  return (
    <>
      <div className="flex justify-center items-center bg-blue-600 w-44 h-12 rounded-md hover:bg-blue-500">
        <span className="text-white text-lg ">{text}</span>
      </div>
      <style jsx>
        {`
        
        `}
      </style>
    </>
  );
}
