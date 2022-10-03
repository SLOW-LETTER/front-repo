interface label {
  Label: string;
}
export default function Checkbox({ Label }: label) {
  return (
    <>
      <div className="checkbox-container flex flex-row w-96 justify-between">
        <div className="label font-semibold p-3 w-56 text-start">{Label}</div>
        <input
          type={"checkbox"}
          className="checkbox flex border-blue-300 w-32 h-8 mr-2 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
        />
      </div>
      <style jsx>{`
        .checkbox {
        }
      `}</style>
    </>
  );
}
