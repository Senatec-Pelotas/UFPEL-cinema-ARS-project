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
    </main>
  );
}
