export default function ProgressBar({ children }: any) {
  return (
    <>
      <div className="steps-container">{children}</div>
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
