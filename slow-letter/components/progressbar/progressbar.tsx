export default function ProgressBar({ children }: any) {
  return (
    <>
      <div className="steps-container">{children}</div>
      <style jsx>
        {`
          .steps-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6rem;
            padding-top: 2rem;
          }
        `}
      </style>
    </>
  );
}
