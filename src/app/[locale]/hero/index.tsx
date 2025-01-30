import { useTranslations } from "next-intl";

import Image from "next/image";
import hero from "@/assets/img/hero.webp";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="h-screen max-w-screen relative">
      <Image
        className="h-full w-full object-cover object-top "
        src={hero}
        alt=""
      ></Image>
      <div className=" absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
        <h1 className="text-8xl font-bold text-white"> {t("title")} </h1>
        <h2 className="text-3xl text-white">{t("subtitle")}</h2>
        <div className="flex justify-center gap-4 mt-8">
          <Button>Services</Button>
          <Button>Contact</Button>

        </div>
      </div>

      <span className="w-full h-full bg z-0 top-0 absolute left-0 object-cover"></span>
    </section>
  );
}
