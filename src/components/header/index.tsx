import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { Languages } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

import logo from "@/assets/img/ownetLogo.png";
import spain from "@/assets/svg/spain.svg";
import english from "@/assets/svg/england.svg";
import france from "@/assets/svg/france.svg";
import german from "@/assets/svg/german.svg";

export default function Header() {
  const t = useTranslations("Header");
  const { locales } = routing;

  return (
    <header className="flex items-center justify-between px-6 py-2 fixed top-0 left-0 right-0 z-10  ">
      <Link href={"/"}>
        <Image src={logo} width={140} height={40} alt="logo"></Image>
      </Link>

      <nav className="flex space-x-10 font-semibold text-white">
        <Link href={"/about"}>{t("services")}</Link>
        <Link href={"/about"}>{t("contact")}</Link>
        <Link href={"/about"}>{t("about")}</Link>
      </nav>

      <Select>
        <SelectTrigger className="w-32">
          <Languages color="#2f582f"></Languages>
        </SelectTrigger>

        <SelectContent className="max-w-28">
          <Link value="spanish">
            <Link href="/" locale="es">
              <Image src={spain} width={20} height={20} alt="spanish"></Image>
            </Link>
          </Link>
          <Link value="english">
            <Link href="/" locale="en">
              <Image width={20} height={20} src={english} alt="english"></Image>
            </Link>
          </Link>
          <Link value="french">
            <Link href="/" locale="fr">
              <Image width={20} height={20} src={france} alt="french"></Image>
            </Link>
          </Link>
          <Link value="german">
            <Link href="/" locale="ge">
              <Image width={20} height={20} src={german} alt="german" />
            </Link>
          </Link>
        </SelectContent>
      </Select>
    </header>
  );
}