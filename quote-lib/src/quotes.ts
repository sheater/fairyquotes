export interface IQuoteItem {
  character?: string; // empty character => narrator
  text: string;
}

export interface IQuoteDialog {
  show: string;
  items: Array<IQuoteItem>;
}

export const quotes: Record<string, IQuoteDialog> = {
  LOTRANDO01: {
    show: "Lotrando a Zubejda",
    items: [
      {
        character: "Sultán Solimán",
        text: "Já je radši trestám předem, protože potom by to už nebylo nic platné.",
      },
    ],
  },
  LOTRANDO02: {
    show: "Lotrando a Zubejda",
    items: [
      {
        text: "Hálí dá Drncovi pytlíček s penězi. Lotrando z toho vyloví jednu minci a kousne do ní.",
      },
      {
        character: "Lotrando",
        text: "Měna je to tvrdá.",
      },
    ],
  },
  LOTRANDO03: {
    show: "Lotrando a Zubejda",
    items: [
      {
        character: "Lotrando",
        text: "Co mi to tady vyrazilo na čele?",
      },
      {
        character: "Drnec",
        text: "No, to bude asi pot.",
      },
      {
        character: "Lotrando",
        text: "A není to příznak choroby?",
      },
    ],
  },
  ARABELA01: {
    show: "Arabela",
    items: [
      {
        text: "Kat má popravit Petra.",
      },
      {
        character: "Paní Blekotová",
        text: "Děti, nedívejte se!",
      },
      {
        character: "Kat",
        text: "Je to až od patnácti.",
      },
    ],
  },
  ARABELA02: {
    show: "Arabela",
    items: [
      {
        character: "Král",
        text: "Továrnu, kde se takhle vaří, bych nechal vyhodit do povětří.",
      },
    ],
  },
  ARABELA03: {
    show: "Arabela",
    items: [
      {
        character: "Pan Majer",
        text: "Jestli se roznese, že jsem byl v base, tak mě už v televizi nenechají vyprávět pohádky.",
      },
    ],
  },
  MLEJN01: {
    show: "Princezna ze mlejna",
    items: [
      {
        character: "Knížepán",
        text: "Žán, podal mi ten inštrument.",
      },
    ],
  },
  MLEJN02: {
    show: "Princezna ze mlejna",
    items: [
      {
        text: "Vodník přinese Elišce jako dárek šupinu.",
      },
      {
        character: "Čert",
        text: "Lakoto jedna! To jsi tu rybu nemoh přinýst celou? Abychom si ji mohli upíct, s Eliškou, když se budeme brát.",
      },
    ],
  },
  MLEJN03: {
    show: "Princezna ze mlejna",
    items: [
      {
        text: "Knížepán si hledá nevěstu.",
      },
      {
        character: "Jean",
        text: "Tady, jasnosti, princezna z Klebelsteinu.",
      },
      {
        character: "Knížepán",
        text: "Jean se zbláznil! Ani sedmihlavá saň toho tolik nesežere jako vona!",
      },
    ],
  },
  MLEJN04: {
    show: "Princezna ze mlejna",
    items: [
      {
        character: "Otec Jindřicha",
        text: "Copak si myslíš, že zrovna na tebe nějaká princezna čeká?",
      },
      {
        character: "Jindřich",
        text: "Půjdu ji hledat do světa. Najdu nějakou zakletou, vysvobodím ji a pak ji dostanu za ženu.",
      },
      {
        character: "Matka Jindřicha",
        text: "Chlapče nešťastná, už tě zase chytá fantaz?",
      },
      {
        character: "Jindřich",
        text: "Jen mě nechte, maminko. Ještě budete ráda, až budete mít za syna pana krále!",
      },
      {
        character: "Otec Jindřicha",
        text: "To už abychom začali gruntovat, matko.",
      },
    ],
  },
};
