interface CardProps {
  title: string;
  index: string;
  className: string;
}

const CardBanner = ({ title, index, className }: CardProps) => {
  return (
    <div
      className={`${className} relative h-80 w-[400px] py-32 rounded-lg shadow-lg px-20`}
    >
      <div className="absolute -left-12 top-0">
        <p className="text-[200px] font-bold text-color_numbers">{index}</p>
      </div>
      <h2 className=" text-black text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default CardBanner;
