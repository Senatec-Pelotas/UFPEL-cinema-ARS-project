interface buttonProps {
  link: string;
  content: string;
  textColor: string;
  backgroundColor: string;
  otherStyles?: string;
  positionClasses: string;
};

import Link from "next/link";

const Button = ({ link, content, textColor, backgroundColor, otherStyles, positionClasses }: buttonProps) => {
  return (
    <div className={positionClasses}>
      <Link href={link}>
          <span className={`bg-${backgroundColor} font-bold text-${textColor} rounded-lg text-4xl ${otherStyles}`}>
            {content}
          </span>
        </Link>
      </div>
  );
};

export default Button;
