import Link from "next/link";

const Button: React.FC = () => {
  return (
    <Link href={"/"}>
      <span className="bg-white font-bold py-4 px-8 m-0 text-color_bg_title rounded-lg text-4xl hover:bg-slate-300">
        INSCREVA-SE
      </span>
    </Link>
  );
};

export default Button;
