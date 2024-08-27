import Image from "next/image";

function Carousel2() {
  return (
    <>
        <div className="carousel carousel-center m-10 gap-5">
            <div id="item4" className="carousel-item">
                <Image
                src={"/images/StarWars.png"}
                className="rounded-box w-[700px] h-[387px]"
                alt=""
                width={1280}
                height={720}/>
            </div>
            <div id="item5" className="carousel-item">
                <Image
                src={"/images/AquaMan.png"}
                className="rounded-box w-[700px] h-[387px]"
                alt=""
                width={1280}
                height={720}/>
            </div>
            <div id="item6" className="carousel-item">
                <Image
                src={"/images/Cavaleiro.jpg"}
                className="rounded-box w-[700px] h-[387px]"
                alt=""
                width={1280}
                height={720}/>
            </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item4" className="btn btn-xs">1</a>
            <a href="#item5" className="btn btn-xs">2</a>
            <a href="#item6" className="btn btn-xs">3</a>
        </div>
    </>
  );
}

export default Carousel2;