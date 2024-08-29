import Image from "next/image";
import { Link } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

//falta responsividade, não sei como recolher a navbar
export default function Header() {
  return (
    <header className="flex bg-gradient-to-b from-color_header to-emerald-900 drop-shadow-2xlw items-center  h-28 w-full pl-8">
      <Image
        src={"/icons/film-icon.svg"}
        className="w-20 h-auto"
        alt=""
        width={40}
        height={40}
      />
      <nav className="w-[800px]">
        <div className="navbar">
          <ul className="navbar-center ml-[700px] flex gap-24 text-white text-3xl font-semibold">
            <li>SOBRE</li>
            <li>CIDADES</li>
            <li>GALERIA</li>
            <li>NOTÍCIAS</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
