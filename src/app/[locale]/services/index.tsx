import Image from "next/image";
import { useTranslations } from "next-intl";

import des from "@/assets/icons/desinfection.svg";
import apt from "@/assets/icons/apt.svg";
import off from "@/assets/icons/office.svg";
import wind from "@/assets/icons/window.svg";
import commu from "@/assets/icons/community.svg";
import constr from "@/assets/icons/construction.svg";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section className="flex flex-col items-center justify-center mt-16">
      <h2 className="font-bold text-5xl"> {t("title")}</h2>
      <div className="p-6 grid grid-cols-1 gap-4 mt-16 place-items-center sm:grid-cols-3">
        <div className="border rounded-md p-8 w-80 h-64 sm:h-80 flex items-start justify-center flex-col gap-4 shadow-md ">
          <Image src={des} width={40} height={40} alt="" />
          <h3 className="font-bold text-base">{t("card1.title")} </h3>
          <p>{t("card1.description")}</p>
        </div>

        <div className="border rounded-md p-8 w-80 h-64 sm:h-80 flex items-start justify-center flex-col gap-4 shadow-md">
          <Image src={apt} width={40} height={40} alt="" />
          <h3 className="font-bold text-base">{t("card2.title")} </h3>
          <p>{t("card2.description")}</p>
        </div>

        <div className="border rounded-md p-8 w-80 h-64 sm:h-80 flex items-start justify-center flex-col gap-4 shadow-md">
          <Image src={off} width={40} height={40} alt="" />
          <h3 className="font-bold text-base">{t("card3.title")}</h3>
          <p>{t("card3.description")}</p>
        </div>

        <div className="border rounded-md p-8 w-80 h-64 sm:h-80 flex items-start justify-center flex-col gap-4 shadow-md">
          <Image src={wind} width={40} height={40} alt="" />
          <h3 className="font-bold text-base">{t("card4.title")}</h3>
          <p>{t("card4.description")}</p>
        </div>

        <div className="border rounded-md p-8 w-80 h-64 sm:h-80 flex items-start justify-center flex-col gap-4 shadow-md">
          <Image src={commu} width={40} height={40} alt="" />
          <h3 className="font-bold text-base">{t("card5.title")}</h3>
          <p>{t("card5.description")}</p>
        </div>

        <div className="border rounded-md p-8 w-80 h-64 sm:h-80 flex items-start justify-center flex-col gap-4 shadow-md">
          <Image src={constr} width={40} height={40} alt="" />
          <h3 className="font-bold text-base">{t("card6.title")}</h3>
          <p>{t("card6.description")}</p>
        </div>
      </div>
    </section>
  );
}
