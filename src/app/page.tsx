"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import Header from "../components/header";

export default function Home() {
  const partners = [
    "asp.png",
    "aesculap-b-braun.png",
    "bd.png",
    "biosense.png",
    "cordis.png",
    "eth.png",
    "ethicon-endo-surgery.png",
    "depuy-synthes-spine-jandj.png",
  ];

  return (
    <main className="w-screen h-full min-h-screen flex flex-col">
      <section className="w-screen h-screen bg-[url('/hero-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-10 z-0" />
        <Header />

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          width={window.innerWidth}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".pagination",
            // bulletClass: "bullet",
            bulletActiveClass: "bullet-active",
          }}
        >
          <SwiperSlide className="w-2/3">
            <div className="px-4 flex flex-col gap-8 justify-center md:gap-16">
              <h1 className="text-4xl text-[#0D4C93] mt-12 md:text-5xl md:mt-20">
                Анализатор
                <br /> ABL800 FLEX
              </h1>
              <p className="text-xl md:text-2xl w-2/3">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="button self-start">Подробнее</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 flex flex-col gap-8 justify-center md:gap-16">
              <h1 className="text-4xl text-[#0D4C93] mt-12 md:text-5xl md:mt-20">
                Аппарат ИК-лазерный <br /> МАКДЭЛ-09.1
              </h1>
              <p className="text-xl md:text-2xl w-2/3">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="button self-start">Подробнее</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 flex flex-col gap-8 justify-center md:gap-16">
              <h1 className="text-4xl text-[#0D4C93] mt-12 md:text-5xl md:mt-20">
                Глюкометр для <br />
                измерения глюкозы
              </h1>
              <p className="text-xl md:text-2xl w-2/3">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="button self-start">Подробнее</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 flex flex-col gap-8 justify-center md:gap-16">
              <h1 className="text-4xl text-[#0D4C93] mt-12 md:text-5xl md:mt-20">
                Система для <br />
                аутогемотрансфузии
              </h1>
              <p className="text-xl md:text-2xl w-2/3">
                Ориентированный на среднюю или высокую производительность
                тестов, анализатор ABL800 FLEX измеряет полный набор параметров,
                включая pH, газы крови, электролиты, метаболиты и показатели
                оксиметрии
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="button self-start">Подробнее</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="pagination flex justify-center items-center z-10 mt-10" />
      </section>

      <section className="w-screen h-full flex flex-col gap-24 pb-8">
        <div className="h-10 w-screen flex justify-center items-center mt-2">
          <p className="text-4xl text-center text-[#0D4C93]">ПРОДУКЦИЯ</p>
        </div>
        {/*  */}
        <div className="flex justify-center items-center gap-8">
          <div className="rounded-xl flex flex-col items-center justify-around bg-slate-100 shadow-sm self-center w-[335px] h-[439px]">
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
          <div className="rounded-xl hidden flex-col  items-center justify-around bg-slate-100 shadow-sm self-center w-[335px] h-[439px] md:flex">
            <div className="w-55 h-55 self-center flex justify-center items-center">
              <Image alt="product" src={"/img6.png"} width={220} height={220} />
            </div>
            <p className="text-center text-xl">
              Лабораторная
              <br /> диагностика
            </p>
            <button className="button !w-60">Посмотреть все</button>
          </div>
        </div>

        {/*  */}
        <div className="flex gap-2 self-center justify-center items-center">
          <Link href="/" className="text-lg text-[#0D4C93]">
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

          <div className="flex justify-center gap-8">
            <div className="relative">
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
            <div className="relative hidden md:flex">
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
          </div>
        </div>
      </section>

      <section className="w-screen h-full flex justify-start items-center relative bg-[#F5F5F5] md:bg-white">
        <div className="z-10 w-screen flex justify-start items-center flex-col gap-8">
          <div className="h-12 w-screen flex justify-center bg-white items-center">
            <p className="text-4xl text-center text-[#0D4C93]">О КОМПАНИИ</p>
          </div>
          <div className="p-4 items-center flex-col gap-12 flex justify-center md:p8 md:bg-[#F5F5F5] md:w-2/3 md:rounded-[50px] md:gap-4 md:p-8 md:shadow-sm">
            <p className="text-center w-2/3 md:leading-loose md:w-full">
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
          <div className="flex relative md:gap-8">
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
                Специализированный Научно-Практический Медицинский Центр
                Урологии) при поддержке компаний Ethicon Endo Surgery
                (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                проведен
              </p>

              <button className="button !w-64 absolute -bottom-8">
                Подробнее
              </button>
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
                Специализированный Научно-Практический Медицинский Центр
                Урологии) при поддержке компаний Ethicon Endo Surgery
                (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                проведен
              </p>

              <button className="button !w-64 absolute -bottom-8">
                Подробнее
              </button>
            </div>

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
          </div>
        </div>
      </section>

      <section className="w-screen h-full flex justify-start items-center relative pb-16">
        <div className="z-10 w-screen flex justify-start items-center flex-col gap-8">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            width={window.innerWidth}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {partners.map((item, key) => {
              return (
                <SwiperSlide className="w-2/3" key={key}>
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      src={`/${item}`}
                      alt="partner"
                      width={300}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <footer className="w-screen flex h-full flex-col p-4 relative bg-[url('/blur-background.png')] bg-cover">
        <div className="absolute inset-0 bg-black opacity-20 z-0" />

        <div className="z-10">
          <Image
            src={"/logo.png"}
            alt="logo"
            className="md:hidden"
            width={272}
            height={79}
          />

          <div className="flex flex-col md:flex-row md:gap-16">
            <p className="text-[#595959] text-2xl mt-8">Контакты</p>

            <div className="flex flex-col justify-start items-start md:flex-row md:flex-wrap md:gap-12">
              <div className="flex justify-start items-center gap-4 mt-4">
                <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
                  <Image src={"/gps.svg"} alt="svg" width={20} height={20} />
                </div>
                <p>
                  г.Ташкент, Чиланзар <br />
                  10 квартал, дом 3/1
                </p>
              </div>
              <div className="flex justify-start items-center gap-4 mt-4">
                <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
                  <Image src={"/phone.svg"} alt="svg" width={20} height={20} />
                </div>
                <div className="flex flex-col">
                  <p>+998 71 276-62-53</p>
                  <p>+998 71 276-62-54</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-4 mt-4">
                <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
                  <Image src={"/mail.svg"} alt="svg" width={20} height={20} />
                </div>
                <p>info@medol.uz</p>
              </div>
              <button className="button mt-4">Оставить заявку</button>
            </div>
          </div>

          <div className="flex w-full justify-center gap-8 my-4 items-center">
            <div
              style={{
                height: 80,
              }}
            >
              <Image
                src={"/logo.png"}
                className="hidden md:flex"
                alt="logo"
                width={272}
                height={79}
              />
            </div>

            <p className="mt-2 text-sm leading-loose md:w-2/4">
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>

          <p className="text-center my-4">
            © 2021 ООО «Medical Online Services»
          </p>
        </div>
      </footer>
    </main>
  );
}
