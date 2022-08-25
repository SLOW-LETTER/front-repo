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
            width: 20rem;
            height: 20rem;
            opacity: 1;
            position: absolute;
            top: 12rem;
            left: 10rem;
          }
          .project-title {
            width: 20rem;
            height: 15rem;
            color: rgba(53, 99, 233, 1);
            position: absolute;
            top: 0;
            left: 0;
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 7rem;
            opacity: 1;
            text-align: left;
            line-height: 120%;
          }
          .project-subtitle {
            width: 20rem;
            color: rgba(53, 99, 233, 0.6000000238418579);
            position: absolute;
            top: 16rem;
            left: 0;
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 2rem;
            opacity: 1;
            text-align: left;
          }
        `}
      </style>
    </>
  );
}
