interface buttonProps {
  link: string;
  content: string;
  textColor: string;
  backgroundColor: string;
  otherStyles: string;
  positionClasses: string;
};

import Link from "next/link";

const Button = ({ link, content, textColor, backgroundColor, otherStyles, positionClasses }: buttonProps) => {
  return (
    <Link href={link}>
      <div className={positionClasses}>
        <span className={`bg-${backgroundColor} font-bold text-${textColor} rounded-lg text-4xl ${otherStyles}`}>
          {content}
        </span>
      </div>
    </Link>
  );
};

export default Button;
