import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Services from"./services/index"
import Hero from "./hero";
import Header from "@/components/header";
import TrustIndicators from "@/components/trust-indicators";

export default function HomePage() {
  return (
    <div className="h-screen max-w-screen w-full sm:w-full ">
      <Header />
      <Hero />
      <TrustIndicators />
      <Services />
    </div>
  );
}
