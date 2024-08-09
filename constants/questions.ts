import { Roles } from "@/enums";

export const questions = [
  [
    {
      id: 1,
      question: `Wydaje mi się, że szybko dostrzegam i umiem wykorzystać nowe możliwości.`,
      assign: Roles.CZK,
    },
    {
      id: 2,
      question: `Mogę dobrze pracować z bardzo różnymi ludźmi.`,
      assign: Roles.CZG,
    },
    {
      id: 3,
      question: `„Produkowanie” pomysłów to moja naturalna zdolność.`,
      assign: Roles.SIE,
    },
    {
      id: 4,
      question: `Moja siła tkwi w tym, że potrafię z ludzi „wyciągnąć” to, co mają w sobie
najlepszego, aby przyczynili się do osiągnięcia celów i zadań grupowych.`,
      assign: Roles.NL,
    },
    {
      id: 5,
      question: `Moja główna umiejętność polega na doprowadzaniu spraw do końca i wiąże się z
efektywnością.`,
      assign: Roles.PER,
    },
    {
      id: 6,
      question: `Jestem w stanie przez jakiś czas zaakceptować niepopularność mojej osoby, jeśli
prowadzi to do wartościowych wyników.`,
      assign: Roles.CZA,
    },
    {
      id: 7,
      question: `Jestem w stanie przez jakiś czas zaakceptować niepopularność mojej osoby, jeśli
prowadzi to do wartościowych wyników.`,
      assign: Roles.PO,
    },
    {
      id: 8,
      question: `Zwykle mogę zaproponować jakieś alternatywne wyjście bez uprzedzeń
i niechęci.`,
      assign: Roles.SE,
    },
  ],
  [
    {
      id: 1,
      question: `Nie mogę się uspokoić, dopóki narada nie jest uporządkowana, kontrolowana
i ogólnie dobrze prowadzona.`,
      assign: Roles.PO,
    },
    {
      id: 2,
      question: `Mam skłonność do bycia wspaniałomyślnym dla tych, których przekonujące
pomysły nie zostały odpowiednio przemyślane.`,
      assign: Roles.NL,
    },
    {
      id: 3,
      question: `Mam skłonność do gadulstwa, gdy grupa rozpracowuje nowe pomysły.`,
      assign: Roles.CZK,
    },
    {
      id: 4,
      question: `Mój chłodny ogląd spraw utrudnia mi przyłączenie się do gotowości i entuzjazmu
kolegów.`,
      assign: Roles.SE,
    },
    {
      id: 5,
      question: `Czasami jestem postrzegany jako wywierający nadmierny nacisk i autorytatywny
wpływ, jeśli coś musi zostać rzeczywiście zrobione.`,
      assign: Roles.CZA,
    },
    {
      id: 6,
      question: `Trudno mi kierować „na pierwszej linii”, gdyż czuję się zbyt odpowiedzialny za
atmosferę grupową.`,
      assign: Roles.CZG,
    },
    {
      id: 7,
      question: `Mam skłonność do rozmyślania o tym, co w danej chwili wpada mi do głowy, przez
co tracę kontakt z tym, co się dzieje.`,
      assign: Roles.SIE,
    },
    {
      id: 8,
      question: `Koledzy widzą mnie jako niepotrzebnie przejmującego się szczegółami
i możliwością, że sprawy mogą się źle ułożyć..`,
      assign: Roles.PER,
    },
  ],
  [
    {
      id: 1,
      question: `Moja czujność pozwala zapobiegać wielu pomyłkom i błędom.`,
      assign: Roles.NL,
    },
    {
      id: 2,
      question: `Mam skłonność do bycia wspaniałomyślnym dla tych, których przekonujące
pomysły nie zostały odpowiednio przemyślane.`,
      assign: Roles.PER,
    },
    {
      id: 3,
      question: `Jestem gotów kłaść nacisk na działanie, aby upewnić się, że narada nie jest stratą
czasu lub, że prowadzi do utracenia z widoku głównego celu.`,
      assign: Roles.CZA,
    },
    {
      id: 4,
      question: `Zwykle można na mnie polegać, że wymyślę coś oryginalnego.`,
      assign: Roles.SIE,
    },
    {
      id: 5,
      question: `Zawsze jestem gotów uczynić dobrą sugestię przedmiotem zainteresowania całej
grupy.`,
      assign: Roles.CZG,
    },
    {
      id: 6,
      question: `Zawsze poszukuję ostatnich nowinek, nowych odkryć i wyników badań na
określony temat.`,
      assign: Roles.CZK,
    },
    {
      id: 7,
      question: `Mam przekonanie, że moja umiejętność wydawania sądu może pomóc w podjęciu
odpowiednich decyzji.`,
      assign: Roles.SE,
    },
    {
      id: 8,
      question: `Moją specjalnością jest zorganizowanie najbardziej znaczącej części pracy.`,
      assign: Roles.PO,
    },
  ],
  // 4
  [
    {
      id: 1,
      question: `Rzeczywiście interesuje się bliższym poznaniem moich kolegów.`,
      assign: Roles.CZG,
    },
    {
      id: 2,
      question: `Nie mam oporów przed przeciwstawieniem się zdaniu większości.`,
      assign: Roles.CZA,
    },
    {
      id: 3,
      question: `Zwykle potrafię przyjąć taką linię argumentacji, aby obalić błędny punkt widzenia.`,
      assign: Roles.SE,
    },
    {
      id: 4,
      question: `Sądzę, że mam szczególny talent do wprowadzania pomysłów w życie, gdy plan
ma być zastosowany.`,
      assign: Roles.PO,
    },
    {
      id: 5,
      question: `Mam skłonność do unikania tego, co oczywiste i do zaskakiwania czymś
niespodziewanym.`,
      assign: Roles.SIE,
    },
    {
      id: 6,
      question: `Doprowadzam to, czego się podejmę do perfekcji.`,
      assign: Roles.PER,
    },
    {
      id: 7,
      question: `Jestem gotów do nawiązywania i wykorzystywania kontaktów poza grupowych,
jeśli jest to potrzebne..`,
      assign: Roles.CZK,
    },
    {
      id: 8,
      question: `Nawet jeśli interesuje mnie wiele aspektów sprawy, nie mam problemów
z podjęciem decyzji co do wyboru rozwiązania..`,
      assign: Roles.NL,
    },
  ],
  // 5
  [
    {
      id: 1,
      question: `Cieszy mnie analizowanie sytuacji i rozważanie możliwości wyboru.`,
      assign: Roles.SE,
    },
    {
      id: 2,
      question: `Interesuje mnie znalezienie praktycznych rozwiązań problemów.`,
      assign: Roles.PO,
    },
    {
      id: 3,
      question: `Lubię mieć przekonanie, że sprzyjam kształtowaniu dobrych kontaktów międzyludzkich w pracy.`,
      assign: Roles.CZG,
    },
    {
      id: 4,
      question: `Lubię mieć duży wpływ na decyzje.`,
      assign: Roles.CZA,
    },
    {
      id: 5,
      question: `Cieszę się z kontaktów z ludźmi, którzy mają coś nowego do zaoferowania.`,
      assign: Roles.CZK,
    },
    {
      id: 6,
      question: `Jestem w stanie doprowadzić do zgody w ważnych dla pracy sprawach.`,
      assign: Roles.NL,
    },
    {
      id: 7,
      question: `Wczuwam się w moją część zadania, jeśli pragnę poświęcić zadaniu całą swoją uwagę. `,
      assign: Roles.PER,
    },
    {
      id: 8,
      question: `Lubię znaleźć taki obszar, który pobudza moja wyobraźnię.`,
      assign: Roles.SIE,
    },
  ],
  // 6
  [
    {
      id: 1,
      question: `Mam ochotę zaszyć się w kącie, aby wymyślić sposób na wyjście z impasu.`,
      assign: Roles.SIE,
    },
    {
      id: 2,
      question: `Byłbym gotów do współpracy z osobą, która wykazała najbardziej pozytywne
nastawienie.`,
      assign: Roles.CZG,
    },
    {
      id: 3,
      question: `Znalazłbym sposób na zmniejszenie skali zadania prze ustalenie, co mogłyby
zrobić poszczególne jednostki.`,
      assign: Roles.NL,
    },
    {
      id: 4,
      question: `Moje naturalne wyczucie spraw pilnych pozwoli na postępowanie zgodnie
z planem.`,
      assign: Roles.PER,
    },
    {
      id: 5,
      question: `Z pewnością zachowam spokój i zdolność do trzeźwego osądu.`,
      assign: Roles.SE,
    },
    {
      id: 6,
      question: `Mimo nacisków zachowam stałość celu.`,
      assign: Roles.PO,
    },
    {
      id: 7,
      question: `Byłbym przygotowany do przejęcia konstruktywnego kierownictwa, jeśli
stwierdziłbym, że grupa nie robi postępu.`,
      assign: Roles.CZA,
    },
    {
      id: 8,
      question: `Zainicjowałbym dyskusję w celu stymulowania nowych pomysłów, rozwiązań.`,
      assign: Roles.CZK,
    },
  ],
  //7
  [
    {
      id: 1,
      question: `Mam skłonność do ujawniania niezadowolenia wobec tych, którzy moim
zdaniem przeszkadzają w osiąganiu postępów.`,
      assign: Roles.CZA,
    },
    {
      id: 2,
      question: `Inni mogą mnie krytykować za to, że jestem analityczny i niedostatecznie
opieram się na intuicji.`,
      assign: Roles.SE,
    },
    {
      id: 3,
      question: `Moje pragnienie, aby praca została starannie wykonana, może wstrzymywać
pójście do przodu.`,
      assign: Roles.PER,
    },
    {
      id: 4,
      question: `Mam skłonność do nudzenia się i oczekuję, że inni będą mnie stymulować
i „zapalać”.`,
      assign: Roles.CZK,
    },
    {
      id: 5,
      question: `Trudno mi rozpocząć, jeśli cele nie są dla mnie jasne.`,
      assign: Roles.PO,
    },
    {
      id: 6,
      question: `Czasami nie jestem tak efektywny, jak bym chciał, jeśli chodzi o wyjaśnienie
złożonych problemów, jakie przede mną stoją.`,
      assign: Roles.SIE,
    },
    {
      id: 7,
      question: `Mam świadomość, że wymagam od innych rzeczy, których sam nie mogę zrobić.`,
      assign: Roles.NL,
    },
    {
      id: 8,
      question: `Waham się, gdy należałoby przeforsować mój punkt widzenia, gdy mam do
czynienia z jawną opozycją.`,
      assign: Roles.CZG,
    },
  ],
];
