import Button from "@/components/Button";
import CardBanner from "@/components/CardBanner";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col home-hero-bg-img">
      <Header />
      <div className="rounded-r-md bg-color_bg_title pl-16 pr-5 py-2 mt-28 mb-72 w-fit ">
        <h2 className="text-white font-semibold text-3xl">
          INCUBAÇÃO, QUALIFICAÇÃO E DISTRIBUIÇÃO DO SETOR AUDIOVISUAL DA REGIÃO
          SUL DO RS
        </h2>
      </div>
      <section className="max-w-[1600px] mx-auto flex flex-col justify-between gap-20">
        <div className="flex items-center gap-20 mt-10 w-full justify-center">
          <CardBanner
            index="1"
            title="ACESSE O EDITAL AQUI "
            className="bg-color_card_primary"
          />
          <CardBanner
            index="2"
            title="DESENVOLVA SEU PROJETO"
            className="bg-color_card_secundary"
          />
          <CardBanner
            index="3"
            title="INSCREVA-SE E CONCORRA A INCUBAÇÃO"
            className="bg-color_card_terciary"
          />
        </div>
        <Button
          link="/"
          content="INSCREVA-SE"
          textColor="color_bg_title"
          backgroundColor="white"
          otherStyles="py-4 px-8 hover:bg-slate-300"
          positionClasses="flex justify-end mt-32"
        />
      </section>
      <section className="bg-[#91b3ab] pb-10">
        <div className="rounded-r-md bg-[#f1f1f1] pl-28 pr-64 py-2 mt-[-.25rem] mb-16 w-fit">
          <h2 className="text-color_bg_title uppercase font-semibold text-3xl">
          Informações sobre o projeto
          </h2>
        </div>
        <p className="mx-40 font-semibold italic text-justify text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
        </p>
      </section>
      <section className="bg-white">
        <h1 className="bg-color_header w-[1200px] text-end my-10 py-2 px-6 rounded-r-xl text-3xl text-white">CIDADES</h1>
        <div className="flex gap-12 ml-12">
          <button className="bg-color_header w-48 py-1 pl-2 text-start text-white">Filtrar por cidade</button>
          <button className="bg-color_header w-48 py-1 px-6 text-white text-center">Ver todas</button>
        </div>
        <Carousel/> 
      </section>
      <section className="bg-white pb-28">
        <div className="rounded-r-md bg-color_bg_title pl-[45rem] pr-4 py-2 mt-[-.25rem] mb-20 w-fit">
            <h2 className="text-white uppercase font-semibold text-3xl">
              Inscrição
            </h2>
        </div>
        <div className="mx-40 font-semibold italic text-justify text-2xl mb-20">
          <p className="mb-8">
            Informações sobre como o usuário deverá fazer a sua inscrição.
          </p>
          <p>
            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis 
          </p>
        </div>
        <Button
          link="/"
          content="INSCREVA-SE"
          textColor="color_bg_title"
          backgroundColor="white"
          otherStyles="shadow-2xl py-4 px-8 hover:bg-slate-300"
          positionClasses="flex justify-center"
        />
      </section>
      <section className="bg-white pb-9">
        <div className="rounded-r-md bg-color_bg_title pl-[74.25rem] pr-4 py-2 mt-[-.25rem] mb-28 w-fit">
          <h2 className="text-white uppercase font-semibold text-3xl">
            Parceiros
          </h2>
        </div>
        <div className="flex justify-around items-center">
          <img className="w-60 h-" src="lei-paulo-gustavo.png" alt="" />
          <img className="w-82 h-48" src="ufpel.png" alt="" />
          <img className="w-96 h-24" src="cinema-ufpel.png" alt="" />
          <img className="w-60 h-" src="campos-neutrais-logo.png" alt="" />
        </div>
      </section>
    </main>
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
      <hr className="mx-5 pb-8"/>
      <ul className="flex justify-around text-sm mx-56 pb-28">
        <li>2024 Senatec. Todos os direitos reservados.</li>
        <li className="underline">Política de Privacidade</li>
        <li className="underline">Termos de Serviço</li>
        <li className="underline">Configurações de Cookies</li>
      </ul>
      <div className="flex justify-end items-center gap-7 pr-9 pb-[1.3rem]">
        <p>Developed by </p>
        <img className="rounded-2xl w-16 h-16" src="senatec_branco.jpg" alt="" />
      </div>
    </footer>
  </>
  );
}
