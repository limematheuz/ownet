import { useTranslations } from "next-intl";

import Image from "next/image";
import hero from "@/assets/img/hero.webp";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative h-screen">
      <Image
        className="h-full object-cover object-top "
        src={hero}
        alt=""
      ></Image>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-8xl font-bold text-white"> {t("title")} </h1>
        <h2 className="text-3xl text-white">{t("subtitle")}</h2>
      </div>
    </section>
  );
}
