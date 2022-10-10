import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";

interface label {
  Label: string;
  ID: string;
  ischecked: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export default function Checkbox({
  ID,
  Label,
  ischecked,
  onChange,
  onClick,
}: label) {
  return (
    <>
      <div className="checkbox-container flex flex-row w-96 justify-between">
        <div className="label font-semibold p-3 w-56 text-start">{Label}</div>
        {ischecked ? (
          <input
            id={ID}
            onChange={onChange}
            onClick={onClick}
            type="checkbox"
            className="checkbox flex border-blue-300 w-32 h-8 mr-2 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
            checked
          />
        ) : (
          <input
            id={ID}
            type="checkbox"
            className="checkbox flex border-blue-300 w-32 h-8 mr-2 mt-2  rounded-lg cursor-pointer hover:bg-blue-100  border-3 border-blue-600 "
          />
        )}
      </div>
      <style jsx>{`
        .checkbox {
        }
      `}</style>
    </>
  );
}
