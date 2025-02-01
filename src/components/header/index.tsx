"use client";

import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import { Cross, Languages, Menu } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import logo from "@/assets/img/ownetLogo.png";
import spain from "@/assets/svg/spain.svg";
import english from "@/assets/svg/england.svg";
import france from "@/assets/svg/france.svg";
import german from "@/assets/svg/german.svg";
import { Button } from "../ui/button";

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
    <section className="flex w-full flex-col ">
      {/* Componente Sheet para móvil */}
      <header className="absolute top-4 left-4 z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <Link href={"/"}>
                <div className="flex items-center w-32 h-12">
                  <Image
                    src={logo}
                    className="w-full h-full object-cover"
                    alt="logo"
                  />
                </div>
              </Link>
              <nav
                className={`flex flex-col space-x-10 font-semibold ${"text-black"}`}
              >
                <Link
                  className="hover:scale-105 hover:text-[var(--accent-color)]"
                  href={"/about"}
                >
                  {t("services")}
                </Link>
                <Link
                  className="hover:scale-105 hover:text-[var(--accent-color)]"
                  href={"/about"}
                >
                  {t("contact")}
                </Link>
                <Link
                  className="hover:scale-105 hover:text-[var(--accent-color)]"
                  href={"/about"}
                >
                  {t("about")}
                </Link>
              </nav>
              <Select>
                <SelectTrigger className="w-32">
                  <Languages className="text-[var(--accent-color)]" />
                </SelectTrigger>
                <SelectContent className="max-w-28">
                  <Link
                    href="/"
                    locale="es"
                    className="flex gap-2 items-center"
                  >
                    <Image src={spain} width={20} height={20} alt="spanish" />
                    <span>Español</span>
                  </Link>
                  <Link
                    href="/"
                    locale="en"
                    className="flex gap-2 items-center"
                  >
                    <Image width={20} height={20} src={english} alt="english" />
                    <span>English</span>
                  </Link>
                  <Link
                    href="/"
                    locale="fr"
                    className="flex gap-2 items-center"
                  >
                    <Image width={20} height={20} src={france} alt="french" />
                    <span>Français</span>
                  </Link>
                  <Link
                    href="/"
                    locale="ge"
                    className="flex gap-2 items-center"
                  >
                    <Image width={20} height={20} src={german} alt="german" />
                    <span>Deutsch</span>
                  </Link>
                </SelectContent>
              </Select>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      {/* Cabecera para escritorio */}
      <header
        className={`hidden lg:flex items-center justify-between w-screen h-24 px-12 py-16 fixed top-0 left-0 right-0 z-10 transition-colors duration-300 
        ${scroll ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <Link href={"/"}>
          <div className="flex items-center w-32 h-12">
            <Image
              src={logo}
              className="w-full h-full object-cover"
              alt="logo"
            />
          </div>
        </Link>

        <nav
          className={`flex space-x-10 font-semibold ${
            scroll ? "text-black" : "text-white"
          }`}
        >
          <Link
            className="hover:scale-105 hover:text-[var(--accent-color)]"
            href={"/about"}
          >
            {t("services")}
          </Link>
          <Link
            className="hover:scale-105 hover:text-[var(--accent-color)]"
            href={"/about"}
          >
            {t("contact")}
          </Link>
          <Link
            className="hover:scale-105 hover:text-[var(--accent-color)]"
            href={"/about"}
          >
            {t("about")}
          </Link>
        </nav>

        <Select>
          <SelectTrigger className="w-32">
            <Languages className="text-[var(--accent-color)]" />
          </SelectTrigger>
          <SelectContent className="max-w-28">
            <Link href="/" locale="es" className="flex gap-2 items-center">
              <Image src={spain} width={20} height={20} alt="spanish" />
              <span>Español</span>
            </Link>
            <Link href="/" locale="en" className="flex gap-2 items-center">
              <Image width={20} height={20} src={english} alt="english" />
              <span>English</span>
            </Link>
            <Link href="/" locale="fr" className="flex gap-2 items-center">
              <Image width={20} height={20} src={france} alt="french" />
              <span>Français</span>
            </Link>
            <Link href="/" locale="ge" className="flex gap-2 items-center">
              <Image width={20} height={20} src={german} alt="german" />
              <span>Deutsch</span>
            </Link>
          </SelectContent>
        </Select>
      </header>
    </section>
  );
}
