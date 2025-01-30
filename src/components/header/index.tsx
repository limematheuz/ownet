"use client";

import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import Image from "next/image";
import { Languages } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import logo from "@/assets/img/ownetLogo.png";
import spain from "@/assets/svg/spain.svg";
import english from "@/assets/svg/england.svg";
import france from "@/assets/svg/france.svg";
import german from "@/assets/svg/german.svg";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex items-center justify-between w-screen h-20 px-6 py-4 fixed top-0 left-0 right-0 z-10 transition-colors duration-300 
      ${scroll ? "bg-white" : "bg-transparent "}`}>
      <Link href={"/"}>
        <div className="flex items-center w-32 h-12">
          <Image
            src={logo}
            className="w-full h-full object-cover"
            alt="logo"
          ></Image>
        </div>
      </Link>

      <nav className={`flex space-x-10 font-semibold text-white  ${scroll ? " text-black" : "bg-transparent text-white"}`}>
        <Link href={"/about"}>{t("services")}</Link>
        <Link href={"/about"}>{t("contact")}</Link>
        <Link href={"/about"}>{t("about")}</Link>
      </nav>

      <Select>
        <SelectTrigger className="w-32">
          <Languages color="#2f582f"></Languages>
        </SelectTrigger>

        <SelectContent className="max-w-28">
          <Link href="/" locale="es" className="flex gap-8">
            <Image src={spain} width={20} height={20} alt="spanish" />
            <span>Español</span>
          </Link>
          <Link href="/" locale="en" className="flex gap-8">
            <Image width={20} height={20} src={english} alt="english" />
            <span>English</span>
          </Link>
          <Link href="/" locale="fr" className="flex gap-8">
            <Image width={20} height={20} src={france} alt="french" />
            <span>Français</span>
          </Link>
          <Link href="/" locale="ge" className="flex gap-8">
            <Image width={20} height={20} src={german} alt="german" />
            <span>Deutsch</span>
          </Link>
        </SelectContent>
      </Select>
    </header>
  );
}
