

function Footer() {
    return (
        <footer className="bg-color_bg_title text-white">
            <div className="flex justify-around items-center py-28">
                <h2 className="text-4xl font-bold">Logo</h2>
                <ul className="flex justify-around gap-5 font-semibold">
                    <li>Link Um</li>
                    <li>Link Dois</li>
                    <li>Link Três</li>
                    <li>Link Quatro</li>
                    <li>Link Cinco</li>
                </ul>
                <div className="flex gap-4">
                    <p>F</p>
                    <p>I</p>
                    <p>X</p>
                    <p>L</p>
                    <p>Y</p>
                </div>
            </div>
            <hr className="mx-5 pb-8" />
            <ul className="flex justify-around text-sm mx-56 pb-28">
                <li>2024 Senatec. Todos os direitos reservados.</li>
                <li className="underline">Política de Privacidade</li>
                <li className="underline">Termos de Serviço</li>
                <li className="underline">Configurações de Cookies</li>
            </ul>
            <div className="flex justify-end items-center gap-7 pr-9 pb-[1.3rem]">
                <p>Developed by</p>
                <img className="rounded-2xl w-16 h-16" src={"/logos/senatec_branco.jpg"} alt="" />
            </div>
        </footer>
    );
}

export default Footer;
