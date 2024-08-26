import Button from "@/components/Button";
import CardBanner from "@/components/CardBanner";
import Header from "@/components/Header";

export default function Home() {
  return (
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

        <div className="flex justify-end mt-32">
          <Button />
        </div>
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
          <button className="bg-color_header w-48 py-1 pl-4 pr-2 text-white">Filtrar por cidade</button>
          <button className="bg-color_header w-48 py-1 px-6 text-white text-center">Ver todas</button>
        </div>
      </section>
    </main>
  );
}
