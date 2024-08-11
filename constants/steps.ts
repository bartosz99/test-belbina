import { StepsComponents } from "@/enums";

const previousButton = {
  name: "Previous",
  type: "button",
  hidden: false,
};

const nextButton = {
  name: "Next",
  type: "button",
  hidden: false,
};

export const steps = [
  {
    id: 1,
    name: "Introduction",
    questionSection: null,
    component: StepsComponents.Introduction,
    //extends the previousButton and nextButton objects
    buttons: [
      { ...previousButton, hidden: true },
      { ...nextButton, name: "Start" },
    ],
  },
  {
    id: 2,
    name: "Explanation",
    questionSection: null,
    component: StepsComponents.Explanation,
    buttons: [previousButton, nextButton],
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
    buttons: [previousButton, nextButton],
  },
  {
    id: 11,
    name: "Results",
    questionSection: null,
    component: StepsComponents.Results,
    buttons: [previousButton, nextButton],
  },
];
