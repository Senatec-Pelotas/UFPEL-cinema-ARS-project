import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-color_bg_title text-white">
            <div className="flex justify-around items-center py-[5.688rem]">
                <a href=""><h2 className="text-4xl font-bold">Logo</h2></a>
                <ul className="flex gap-9 font-semibold pl-24">
                    <a href=""><li>Link Um</li></a>
                    <a href=""><li>Link Dois</li></a>
                    <a href=""><li>Link Três</li></a>
                    <a href=""><li>Link Quatro</li></a>
                    <a href=""><li>Link Cinco</li></a>
                </ul>
                <div className="flex gap-4">
                    <a href=""><Facebook/></a>
                    <a href=""><Instagram/></a>
                    <a href=""><Twitter/></a>
                    <a href=""><Linkedin/></a>
                    <a href=""><Youtube/></a>
                </div>
            </div>
            <hr className="mx-16 pb-9" />
            <ul className="flex justify-center text-sm mx-56 pb-28 gap-7">
                <li>2024 Senatec. Todos os direitos reservados.</li>
                <a href=""><li className="underline">Política de Privacidade</li></a>
                <a href=""><li className="underline">Termos de Serviço</li></a>
                <a href=""><li className="underline">Configurações de Cookies</li></a>
            </ul>
            <div className="flex justify-end items-center gap-7 pr-9 pb-[1.3rem]">
                <p>Developed by</p>
                <a href=""><img className="rounded-2xl w-16 h-16" src={"/logos/senatec_branco.jpg"} alt="" /></a>
            </div>
        </footer>
    );
}

export default Footer;
