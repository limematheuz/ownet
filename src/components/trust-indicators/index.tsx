import { BicepsFlexed, ShieldCheck, SmileIcon } from "lucide-react";

export default function TrustIndicators() {
  return (
    <section className="flex flex-col items-center justify-center min-h-72 mt-16 gap-8 ">
      <h2 className="text-[#2f582f] text-5xl font-bold">Why Choose Ownet?</h2>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-3 md:w-4/5 sm:w-3/5">
        <div className="flex flex-col items-center">
          <ShieldCheck stroke="#2f582f" size={60} />
          <h3 className="font-bold text-3xl mt-4 text-[#2f582f]">Experts</h3>
          <p className="text-center font-bold text-xl text-[#90a955] ">
            Licensed, bonded, and insured.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <SmileIcon stroke="#2f582f" size={60} />
          <h3 className="font-bold text-3xl mt-4 text-[#2f582f]">Satisfaction</h3>
          <p className="text-center font-bold text-xl text-[#90a955]">
            Reliable service, every time.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BicepsFlexed stroke="#2f582f" size={60} />
          <h3 className="font-bold text-3xl mt-4 text-[#2f582f]">Quality</h3>
          <p className="text-center font-bold text-xl text-[#90a955]">
            Immaculate results, guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
