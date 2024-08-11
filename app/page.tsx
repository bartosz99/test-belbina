import { Belbin } from "@/components/belbin";
import { BelbinModal } from "@/components/belbin-modal";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Belbin />
      <BelbinModal />
    </section>
  );
}
