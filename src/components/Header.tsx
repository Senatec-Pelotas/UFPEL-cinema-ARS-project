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
    <header className="flex bg-primary drop-shadow-2xlw items-center justify-between h-28 w-full pr-16 pl-8 bg-black">
      <Image
        src={"/icons/film-icon.svg"}
        className="w-20 h-auto"
        alt=""
        width={40}
        height={40}
      />
      <nav className="w-[800px]">
        <Breadcrumb separator="" className="text-white text-2xl font-medium px">
          <BreadcrumbItem gap="100px">
            <BreadcrumbLink href="#">Sobre</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem gap="100px">
            <BreadcrumbLink href="#">Cidades</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem gap="100px">
            <BreadcrumbLink href="#">Galeria</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem gap="100px">
            <BreadcrumbLink href="#">Notícias</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
    </header>
  );
}
