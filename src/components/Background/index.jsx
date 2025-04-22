import ellipse1 from "../../assets/images/Ellipse1.svg";
import ellipse2 from "../../assets/images/Ellipse2.svg";

export const Background = () => {
  return (
    <>
      <img
        className="z-10 w-[888px] absolute top-[-200px] right-[-100px] animate-wiggle max-[768px]:top-0 max-[768px]:right-0 max-[768px]:animate-opacity"
        src={ellipse1}
        alt="ellipse 1 image"
      />
      <img
        className="z-30 w-[500px] absolute top-[40px] left-[-20px] animate-wiggle max-[768px]:bottom-0 max-[768px]:left-0 max-[768px]:animate-opacity"
        src={ellipse2}
        alt="ellipse 2 image"
      />
    </>
  );
};
