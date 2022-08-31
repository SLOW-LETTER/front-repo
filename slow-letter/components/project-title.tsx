interface Props {
  containerTop: string;
  containerLeft: string;
  titleTop: string;
  titleLeft: string;
  subtitleTop: string;
  subtitleLeft: string;
}

export default function ProjectTitle({
  containerTop,
  containerLeft,
  titleTop,
  titleLeft,
  subtitleTop,
  subtitleLeft,
}: Props) {
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
            top: ${containerTop};
            left: ${containerLeft};
          }
          .project-title {
            width: 20rem;
            height: 15rem;
            color: rgba(53, 99, 233, 1);
            position: absolute;
            top: ${titleTop};
            left: ${titleLeft};
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
            top: ${subtitleTop};
            left: ${subtitleLeft};
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
