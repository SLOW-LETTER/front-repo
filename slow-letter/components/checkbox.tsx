interface label {
  Label: string;
}
export default function Checkbox({ Label }: label) {
  return (
    <>
      <div className="checkbox-container w-34 flex flex-row justify-items-start space-x-24">
        <label className="label font-semibold p-3">{Label}</label>
        <input
          type={"checkbox"}
          className="checkbox flex border-blue-300 w-32 h-8 mr-12 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
        />
      </div>
      <style jsx>{`
        .checkbox {
          position: absolute;
          right: 5px;
        }
        .label {
          position: relative;
          left: -100px;
          top: 3px;
        }
      `}</style>
    </>
  );
}
