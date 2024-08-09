import { StepsComponents } from "@/enums";

export const steps = [
  {
    id: 1,
    name: "Introduction",
    questionSection: null,
    component: StepsComponents.Introduction,
  },
  {
    id: 2,
    name: "Explanation",
    questionSection: null,
    component: StepsComponents.Explanation,
  },
  {
    id: 3,
    name: "Part 1 ",
    questionSection: 0,
    component: StepsComponents.Form,
  },
  {
    id: 4,
    name: "Part 2",
    questionSection: 1,
    component: StepsComponents.Form,
  },
  {
    id: 5,
    name: "Part 3",
    questionSection: 2,
    component: StepsComponents.Form,
  },
  {
    id: 6,
    name: "Part 4",
    questionSection: 3,
    component: StepsComponents.Form,
  },
  {
    id: 7,
    name: "Part 5",
    questionSection: 4,
    component: StepsComponents.Form,
  },
  {
    id: 8,
    name: "Part 6",
    questionSection: 5,
    component: StepsComponents.Form,
  },
  {
    id: 9,
    name: "Part 7",
    questionSection: 6,
    component: StepsComponents.Form,
  },
  {
    id: 10,
    name: "Before Results",
    questionSection: null,
    component: StepsComponents.BeforeResults,
  },
  {
    id: 11,
    name: "Results",
    questionSection: null,
    component: StepsComponents.Results,
  },
];
