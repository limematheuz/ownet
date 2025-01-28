import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "@/assets/ownetLogo.png";
import Image from "next/image";
import { Languages } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-2 border-b">
      <Link href={"/"}>
        <Image src={logo} width={140} height={40} alt="logo"></Image>
      </Link>

      <nav className="flex space-x-10">
        <Link href={"/about"}> Services</Link>
        <Link href={"/about"}> Contact</Link>
        <Link href={"/about"}> About</Link>
      </nav>

      <Select>
        <SelectTrigger className="w-[120px]">
          <Languages color="#2f582f"></Languages>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">ES</SelectItem>
          <SelectItem value="dark">EN</SelectItem>
          <SelectItem value="system">FR</SelectItem>
          <SelectItem value="system">DE</SelectItem>
        </SelectContent>
      </Select>
    </header>
  );
}
