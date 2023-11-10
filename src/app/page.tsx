import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";
export default function Home() {
  return (
    <main className="w-screen h-full min-h-screen flex flex-col">
      <section className="w-screen h-screen bg-[url('/hero-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-10 z-0" />
        <Header />
        <div className="px-4 flex flex-col gap-16">
          <h1 className="text-5xl text-[#0D4C93] mt-20">
            Анализатор
            <br /> ABL800 FLEX
          </h1>
          <p className="text-2xl">
            Ориентированный на среднюю или высокую производительность тестов,
            анализатор ABL800 FLEX измеряет полный набор параметров, включая pH,
            газы крови, электролиты, метаболиты и показатели оксиметрии
          </p>
          <button className="button">Подробнее</button>

          <Image
            src={"/slider.svg"}
            width={100}
            height={20}
            alt="slider"
            className="self-center"
          />
        </div>
      </section>

      <section className="w-screen h-full flex flex-col gap-24 pb-8">
        <div className="h-10 w-screen flex justify-center items-center mt-2">
          <p className="text-4xl text-center text-[#0D4C93]">ПРОДУКЦИЯ</p>
        </div>
        <div className="rounded-xl flex flex-col gap-4 items-center justify-center bg-slate-100 shadow-sm self-center w-[335px] h-[439px]">
          <div className="w-55 h-55 self-center">
            <Image
              alt="product"
              src={"/endeavor-large.png"}
              width={220}
              height={220}
            />
          </div>
          <p className="text-center text-xl">
            Эндоваскулярная <br /> хирургия
          </p>
          <button className="button !w-60">Посмотреть все</button>
        </div>
        <div className="flex gap-2 self-center justify-center items-center">
          <Link href="/" className="text-xl text-[#0D4C93]">
            Перейти в каталог нашей продукции
          </Link>
          <Image src={"/arrow.svg"} width={20} height={20} alt="arrow" />
        </div>
      </section>

      <section className="w-screen h-full flex justify-start items-center relative  bg-[url('/second-bg.png')] bg-cover">
        <div className="absolute inset-0 bg-black opacity-20 z-0" />
        <div className="z-10 w-screen flex justify-start items-center flex-col pb-20">
          <div className="h-12 w-screen flex justify-center bg-white items-center">
            <p className="text-4xl text-center text-[#0D4C93]">УСЛУГИ</p>
          </div>

          <div className="rounded-3xl self-center h-[500px] mt-4 w-80 bg-white overflow-hidden">
            <div className="h-60 w-80 relative">
              <Image src={"/service.png"} fill={true} alt="img" />
            </div>
            <div className="w-full p-2">
              <p className="text-xl text-center text-[#0D4C93] mt-8">
                СЕРВИС ОБОРУДОВАНИЯ
              </p>
              <p className="text-sm text-center mt-2">
                Компания предоставляет сервисное обслуживание по всем
                предоставляемым продуктам. У наших инженеров имеется опыт и
                сертификаты фирм производителей......
              </p>
              <button className="button absolute left-1/2 !w-60 translate-y-14 -translate-x-2/4">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen h-full flex justify-start items-center relative bg-[#F5F5F5]">
        <div className="z-10 w-screen flex justify-start items-center flex-col gap-8">
          <div className="h-12 w-screen flex justify-center bg-white items-center">
            <p className="text-4xl text-center text-[#0D4C93]">О КОМПАНИИ</p>
          </div>
          <div className="p-4 items-center flex-col gap-12 flex justify-center">
            <p className="text-center w-2/3">
              Группа компаний MEDOL создавалась высококвалифицированными
              специалистами в сфере медицины, инженерии и экономики, за плечами
              которых значительный опыт на рынке высоких медицинских технологий,
              которая имеет свои представительства в разных уголках Земли. В
              2011 году MEDOL зарегистрировал в Узбекистане
            </p>

            <button className="button">Узнать больше</button>
          </div>
        </div>
      </section>

      <section className="w-screen h-full flex justify-start items-center relative pb-16">
        <div className="z-10 w-screen flex justify-start items-center flex-col gap-8">
          <div className="h-12 w-screen flex justify-center bg-white items-center">
            <p className="text-4xl text-center text-[#0D4C93]">НОВОСТИ</p>
          </div>

          <div className="w-80 relative h-full flex justify-start flex-col items-center rounded-3xl bg-[#F6F6F6] mt-12 px-8 pb-14">
            <Image
              src={"/doctors.png"}
              alt="doctors"
              width={274}
              height={188}
              className="rounded-[40px] -mt-16"
            />
            <p className="text-center mt-26 text-[#0D4C93] mt-4">
              Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
            </p>
            <p className="mt-4 text-[#0D4C93]">26.07.2021</p>

            <p className="text-sm text-center">
              С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
              Специализированный Научно-Практический Медицинский Центр Урологии)
              при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП
              ООО «Medical Online Services» был проведен
            </p>

            <button className="button !w-10 !h-10 absolute -left-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
              <Image
                src={"/solid-left-arrow.png"}
                width={20}
                height={20}
                alt="arrow"
              />
            </button>
            <button className="button !w-10 !h-10 absolute -right-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
              <Image
                src={"/solid-right-arrow.png"}
                width={20}
                height={20}
                alt="arrow"
              />
            </button>

            <button className="button !w-64 absolute -bottom-8">
              Подробнее
            </button>
          </div>
        </div>
      </section>

      <section className="w-screen h-full flex justify-start items-center relative pb-16">
        <div className="z-10 w-screen flex justify-start items-center flex-col gap-8">
          <div className="h-12 w-screen flex justify-center bg-white items-center">
            <p className="text-4xl text-center text-[#0D4C93]">ПАРТНЁРЫ</p>
          </div>
          <div className="w-11/12 h-60 rounded-3xl border border-[#ECECEC] flex justify-center items-center">
            <Image
              src={"/aesculap-b-braun.png"}
              width={200}
              height={40}
              alt="slider"
              className="self-center"
            />
          </div>
          <Image
            src={"/slider.svg"}
            width={100}
            height={20}
            alt="slider"
            className="self-center"
          />
        </div>
      </section>

      <footer className="w-screen flex h-full flex-col p-4 relative bg-[url('/blur-background.png')] bg-cover">
        <div className="absolute inset-0 bg-black opacity-20 z-0" />

        <div className="z-10">
          <Image src={"/logo.png"} alt="" width={272} height={79} />

          <p className="text-[#595959] text-2xl mt-8">Контакты</p>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
              <Image src={"/gps.svg"} alt="svg" width={20} height={20} />
            </div>
            <p>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
          </div>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
              <Image src={"/gps.svg"} alt="svg" width={20} height={20} />
            </div>
            <p>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
          </div>
          <div className="flex justify-start items-center gap-4 mt-4">
            <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
              <Image src={"/gps.svg"} alt="svg" width={20} height={20} />
            </div>
            <p>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
          </div>

          <button className="button mt-4">Оставить заявку</button>

          <p className="mt-2 text-sm leading-loose">
            Наша цель – построить прозрачный, долгосрочный бизнес, приносить
            огромную пользу населению, путем решения глобальных вопросов.
            Внедряя инновационные технологии на рынок Узбекистана.
          </p>

          <p className="text-center my-4">
            © 2021 ООО «Medical Online Services»
          </p>
        </div>
      </footer>
    </main>
  );
}
