import { ReactElement } from "react";

interface CardProps {
  index: string;
  content: ReactElement;
  otherStyles?: string;
  positionClasses?: string;
}

const CardEdital = ({ index, content, otherStyles, positionClasses }: CardProps) => {
  return (
    <div className={`${positionClasses}`}>
      <div className={"flex items-center bg-white rounded-3xl border-color_header border-[1px] w-[50rem] h-[17.875rem]"}>
        <div className="rounded-r-[3.5rem] rounded-l-3xl bg-color_bg_title">
          <h3 className="text-[190px] px-10 font-bold text-color_numbers">{index}</h3>
        </div>
        <div className={`text-2xl text-color_bg_title text-justify font-bold italic px-24 ${otherStyles}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default CardEdital;
