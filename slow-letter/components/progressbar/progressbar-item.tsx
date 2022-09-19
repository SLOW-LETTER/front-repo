import { Icon } from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";

interface Props {
  isActive?: boolean;
  isDone?: boolean;
  text?: string;
  processIdx?: number;
}

export default function ProgressBarItem({ isActive, isDone, text, processIdx }: Props) {
  return (
    <div className="step">
      <div className="step-outer">
        <div
          className={
            isActive
              ? isDone
                ? "step-inner-done"
                : "step-inner-active"
              : "step-inner"
          }
        >
          <div className={isActive ? (isDone ? "check" : "") : "number"}>
            {isActive ? (
              isDone ? (
                <Icon as={MdCheck} color="white" />
              ) : null
            ) : (
              processIdx
            )}
          </div>
        </div>
      </div>
      <div
        className={isActive ? "step-text-crown-active" : "step-text-crown"}
      ></div>
      <div className={isActive ? "step-text-box-active" : "step-text-box"}>
        <div className={isActive ? "text-active" : "text"}>{text}</div>
      </div>
      <style jsx>{`
        .step {
          width: 10rem;
          height: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .step-outer {
          width: 1.5rem;
          height: 1.5rem;
          top: 0.5rem;
          background: #f0f0f0;
          box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
          opacity: 1;
          position: absolute;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-inner {
          position: absolute;
          width: 1rem;
          height: 1rem;
          background: #bfbfbf;
          border: 5px solid #bfbfbf;
          border-radius: 15.883px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-inner-active {
          position: absolute;
          width: 1rem;
          height: 1rem;
          background: #ffffff;
          border: 2.5px solid #3563e9;
          border-radius: 15.883px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-inner-done {
          position: absolute;
          width: 1rem;
          height: 1rem;
          background: #3563e9;
          border-radius: 15.883px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .number {
          position: absolute;
          width: 0.7rem;
          height: 1.1rem;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 0.9rem;
          color: #ffffff;
          text-align: center;
        }
        .check {
          position: absolute;
          top: -0.3rem;
        }
        .step-text-crown {
          position: absolute;
          width: 0;
          height: 0;
          top: 2.5rem;
          border-bottom: 0.3rem solid #bfbfbf;
          border-top: 0.3rem solid transparent;
          border-left: 0.3rem solid transparent;
          border-right: 0.3rem solid transparent;
        }
        .step-text-crown-active {
          position: absolute;
          width: 0;
          height: 0;
          top: 2.5rem;
          border-bottom: 0.3rem solid #3563e9;
          border-top: 0.3rem solid transparent;
          border-left: 0.3rem solid transparent;
          border-right: 0.3rem solid transparent;
        }
        .step-text-box {
          position: absolute;
          width: 6rem;
          height: 1.5rem;
          top: 3.2rem;
          background: #f0f0f0;
          box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-text-box-active {
          position: absolute;
          width: 6rem;
          height: 1.5rem;
          top: 3.2rem;
          background: #3563e9;
          box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text {
          position: absolute;
          width: 5rem;
          height: 1.2rem;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.02em;
          color: #909090;
          text-align: center;
          vertical-align: middle;
        }
        .text-active {
          position: absolute;
          width: 5rem;
          height: 1.2rem;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.02em;
          color: #ffffff;
          text-align: center;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
}