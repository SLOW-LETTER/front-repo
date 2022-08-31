import Image from "next/image";

export default function Template() {
  const onClick = (event: any) => {
    const [, className] = event.target.className.split(" ");
    
    console.log(className);
  };
  return (
    <div className="whole-container">
      <div className="carousel-container">
        <div className="carousel-item-4" onClick={onClick}></div>
        <div className="carousel-item-3" onClick={onClick}></div>
        <div className="carousel-item-5" onClick={onClick}></div>
        <div className="carousel-item-2" onClick={onClick}></div>
        <div className="carousel-item-1" onClick={onClick}></div>
      </div>
      <style jsx>
        {`
          .whole-container {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .carousel-container {
            position: absolute;
            width: 70%;
            height: 25rem;
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .carousel-item-1 {
            position: absolute;
            width: 40rem;
            height: 20rem;
            border-radius: 40px;
            background: url("/carousel-item-1.svg");
          }
          .carousel-item-2 {
            position: absolute;
            left: 22rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            background: url("/carousel-item-2.svg");
            filter: blur(0.5px);
          }
          .carousel-item-5 {
            position: absolute;
            left: 4rem;
            width: 30rem;
            height: 15rem;
            border-radius: 40px;
            background: url("/carousel-item-5.svg");
            filter: blur(0.5px);
          }
          .carousel-item-3 {
            position: absolute;
            left: 35rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            background: url("/carousel-item-3.svg");
            filter: blur(1px);
          }
          .carousel-item-4 {
            position: absolute;
            left: 1.5rem;
            width: 20rem;
            height: 10rem;
            border-radius: 40px;
            background: url("/carousel-item-4.svg");
            filter: blur(1px);
          }
        `}
      </style>
    </div>
  );
}
