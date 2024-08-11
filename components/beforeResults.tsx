"use client";

type Props = {
  displayConfetti: () => void;
};
export const BeforeResults = ({ displayConfetti }: Props) => {
  displayConfetti();

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <h2 className="text-3xl text-center">Gratulacje</h2>
      <p>Wypełniłeś właśnie cały test. Jak interpretować wyniki?</p>
      <p>
        Najwyższy wynik w określonej kolumnie świadczy o najczęściej
        przyjmowanej KONSTRUKTYWNEJ ROLI GRUPOWEJ. Następne w kolejności dotyczą
        ról, które przyjmuje się, jeśli z jakichś powodów istnieje mniejsze
        zapotrzebowanie na tę najbardziej preferowaną. Dwa najniższe wyniki
        dotyczą obszarów, które należałoby rozwijać i prawdopodobnie
        najsłabszych. Być może jednak zamiast je „na siłę” wzmacniać, lepiej
        poszukać kolegów, którzy mogliby w grupie stanowić dla nas dopełnienie.
      </p>
    </div>
  );
};
