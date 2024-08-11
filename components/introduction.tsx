"use client";

import { title, paragraph } from "@/components/primitives";

export const Introduction = () => {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Wypełnij&nbsp;</h1>
      <h1 className={title({ color: "violet" })}>Test Belbina&nbsp;</h1>
      <br />
      <h1 className={title()}>i sprawdź swoją rolę zespołową</h1>
      <p className={paragraph({ class: "mt-4" })}>
        Opracowanie na podstawie autoryzowanego przekładu Barbary Kożusznik i
        Doroty Ekiert Grabowskiej (1994) oraz badań walidacyjnych Stanisława A.
        Witkowskiego i Sławomira Ilskiego (2000)
      </p>
    </div>
  );
};
