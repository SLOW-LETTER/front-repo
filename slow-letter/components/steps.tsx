interface Props {
  isActive: boolean,
  isDone: boolean,
  text: string
  processIdx: number
}

function Step({isActive, isDone, text, processIdx}: Props) {
  return (
    <div className="step">
      <div className="step-outer">
        <div className={isActive ? "step-inner-active" : "step-inner"}>
          <div className={isActive ? "" :"number"}>{isActive ? null : processIdx}</div>
        </div>
      </div>
      <div className={isActive ? "step-text-crown-active" : "step-text-crown"}></div>
      <div className={isActive ? "step-text-box-active" : "step-text-box"}>
        <div className={isActive ? "text-active" :"text"}>{text}</div>
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
          background: #BFBFBF;
          border: 5px solid #BFBFBF;
          border-radius: 15.883px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-inner-active {
          position: absolute;
          width: 1rem;
          height: 1rem;
          background: #FFFFFF;
          border: 2px solid #3563E9;
          border-radius: 15.883px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .number {
          position: absolute;
          width: .7rem;
          height: 1.1rem;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: .9rem;
          color: #ffffff;
          text-align: center;
        }
        .step-text-crown {
          position: absolute;
          width: 0;
          height: 0;
          top: 2.5rem;
          border-bottom: 0.3rem solid #BFBFBF;
          border-top: 0.3rem solid transparent;
          border-left: 0.3rem solid transparent;
          border-right: 0.3rem solid transparent;
        }
        .step-text-crown-active {
          position: absolute;
          width: 0;
          height: 0;
          top: 2.5rem;
          border-bottom: 0.3rem solid #3563E9;
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
          background: #3563E9;
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
          color: #FFFFFF;
          text-align: center;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
}

export default function Steps() {
  return (
    <>
      <div className="steps-container">
        <Step isActive={true} isDone={false} text="Write" processIdx={1} />
        <Step isActive={false} isDone={false} text="Additional" processIdx={2} />
        <Step isActive={false} isDone={false} text="Send" processIdx={3} />
      </div>
      <style jsx>
        {`
          .steps-container {
            position: absolute;
            width: 50rem;
            height: 5rem;
            top: 7rem;
            left: 15rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6rem;
          }
        `}
      </style>
    </>
  );
}
