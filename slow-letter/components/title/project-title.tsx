export default function ProjectTitle() {
  return (
    <>
      <div className="project-title-container">
        <span className="project-title">
          Slow
          <br />
          Letter
        </span>
        <span className="project-subtitle">With all your heart</span>
      </div>
      <style jsx>
        {`
          .project-title-container {
            width: fit-content;
            height: fit-content;
            display: flex;
            flex-direction: column;
          }
          .project-title {
            width: fit-content;
            height: fit-content;
            color: rgba(53, 99, 233, 1);
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 7rem;
            text-align: left;
            line-height: 120%;
          }
          .project-subtitle {
            width: fit-content;
            height: fit-content;
            color: rgba(53, 99, 233, 0.6000000238418579);
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 2rem;
            text-align: left;
          }
        `}
      </style>
    </>
  );
}
