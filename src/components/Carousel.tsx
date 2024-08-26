import Image from "next/image";

function Carousel() {
  return (
    <>
        <div className="carousel carousel-center m-10 gap-5">
            <div id="item1" className="carousel-item">
                <Image
                src={"/images/BaronesaParque.jpg"}
                className="rounded-box w-[700px] h-[387px]"
                alt=""
                width={1280}
                height={720}/>
            </div>
            <div id="item2" className="carousel-item">
                <Image
                src={"/images/Charqueada.jpg"}
                className="rounded-box w-[700px] h-[387px]"
                alt=""
                width={1280}
                height={720}/>
            </div>
            <div id="item3" className="carousel-item">
                <Image
                src={"/images/Charqueada.jpg"}
                className="rounded-box w-[700px] h-[387px]"
                alt=""
                width={1280}
                height={720}/>
            </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
        </div>
    </>
  );
}

export default Carousel;