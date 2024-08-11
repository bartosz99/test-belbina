import { StepsComponents, ButtonActions } from "@/enums";

const previousButton = {
  name: "Wróć",
  variant: "solid",
  color: "default",
  hidden: false,
  isDisabled: false,
  action: ButtonActions.PREV,
};

const nextButton = {
  name: "Dalej",
  variant: "solid",
  color: "default",
  hidden: false,
  isDisabled: false,
  action: ButtonActions.NEXT,
};

export const steps = [
  {
    id: 1,
    name: "Introduction",
    questionSection: null,
    component: StepsComponents.Introduction,
    buttons: [
      { ...previousButton, hidden: true, isDisabled: true },
      { ...nextButton, name: "Rozpocznij test", color: "primary" },
    ],
  },
  {
    id: 2,
    name: "Explanation",
    questionSection: null,
    component: StepsComponents.Explanation,
    buttons: [
      { ...previousButton, name: "Wróć" },
      { ...nextButton, name: "Przejdź do pytań", color: "primary" },
    ],
  },
  {
    id: 3,
    name: "Part 1 ",
    questionSection: 0,
    component: StepsComponents.Form,
    buttons: [previousButton, nextButton],
  },
  {
    id: 4,
    name: "Part 2",
    questionSection: 1,
    component: StepsComponents.Form,
    buttons: [previousButton, nextButton],
  },
  {
    id: 5,
    name: "Part 3",
    questionSection: 2,
    component: StepsComponents.Form,
    buttons: [previousButton, nextButton],
  },
  {
    id: 6,
    name: "Part 4",
    questionSection: 3,
    component: StepsComponents.Form,
    buttons: [previousButton, nextButton],
  },
  {
    id: 7,
    name: "Part 5",
    questionSection: 4,
    component: StepsComponents.Form,
    buttons: [previousButton, nextButton],
  },
  {
    id: 8,
    name: "Part 6",
    questionSection: 5,
    component: StepsComponents.Form,
    buttons: [previousButton, nextButton],
  },
  {
    id: 9,
    name: "Part 7",
    questionSection: 6,
    component: StepsComponents.Form,
    buttons: [previousButton, nextButton],
  },
  {
    id: 10,
    name: "Before Results",
    questionSection: null,
    component: StepsComponents.BeforeResults,
    buttons: [
      previousButton,
      { ...nextButton, color: "primary", name: "Pokaż wyniki" },
    ],
  },
  {
    id: 11,
    name: "Results",
    questionSection: null,
    component: StepsComponents.Results,
    buttons: [
      {
        ...previousButton,
      },
      {
        ...nextButton,
        name: "Zacznij od nowa",
        color: "primary",
        action: ButtonActions.RESET,
      },
    ],
  },
];
