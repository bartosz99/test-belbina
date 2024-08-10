"use client";

import { Progress } from "@nextui-org/progress";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Badge } from "@nextui-org/badge";
import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableBody,
  TableCell,
} from "@nextui-org/table";

import { Introduction } from "@/components/introduction";
import { Explanation } from "@/components/explanation";
import { Results } from "@/components/results";
import { steps, questions } from "@/constants/index";
import { Roles, StepsComponents } from "@/enums/index";

export const Belbin = () => {
  const [step, setStep] = useState(0);
  const [points, setPoints] = useState<Record<keyof typeof Roles, number[]>>({
    PO: [0, 0, 0, 0, 0, 0, 0],
    NL: [0, 0, 0, 0, 0, 0, 0],
    CZA: [0, 0, 0, 0, 0, 0, 0],
    SIE: [0, 0, 0, 0, 0, 0, 0],
    CZK: [0, 0, 0, 0, 0, 0, 0],
    SE: [0, 0, 0, 0, 0, 0, 0],
    CZG: [0, 0, 0, 0, 0, 0, 0],
    PER: [0, 0, 0, 0, 0, 0, 0],
  });

  const stepsLength = Number(steps.length - 1);
  const pointsLeft =
    10 - Object.values(points).reduce((acc, curr) => acc + curr[step - 2], 0);

  const getForm = () => {
    if (steps[step].questionSection === null) return;

    const getBody = questions[steps[step].questionSection].map(
      (question: any) => (
        <TableRow key={question.id}>
          <TableCell>{question.question}</TableCell>
          <TableCell>
            <Input
              className="max-w-16"
              defaultValue="0"
              type={"number"}
              value={
                points[
                  Object.keys(Roles)[
                    Object.values(Roles).indexOf(question.assign)
                  ] as keyof typeof Roles
                ][step - 2]
              }
              variant="bordered"
              onInput={(e) => {
                setPoints({
                  ...points,
                  [Object.keys(Roles)[
                    Object.values(Roles).indexOf(question.assign)
                  ] as keyof typeof Roles]: [
                    ...points[
                      Object.keys(Roles)[
                        Object.values(Roles).indexOf(question.assign)
                      ] as keyof typeof Roles
                    ].map((point, index) =>
                      index === step - 2
                        ? Number(e.currentTarget.value)
                        : point,
                    ),
                  ],
                });
              }}
            />
          </TableCell>
        </TableRow>
      ),
    );

    return (
      <Table
        isCompact
        isStriped
        aria-label="Example static collection table"
        className="max-w-2xl"
      >
        <TableHeader>
          <TableColumn>QUESTION</TableColumn>
          <TableColumn>ANSWER</TableColumn>
        </TableHeader>
        <TableBody>{getBody}</TableBody>
      </Table>
    );
  };

  const dynamicComponent = () => {
    switch (steps[step].component) {
      case "Form":
        return getForm();
      case "Introduction":
        return <Introduction />;
      case "Explanation":
        return <Explanation />;
      case "Before Results":
        return <p>Before Results</p>;
      case "Results":
        return <Results points={points} />;
      default:
        return <p>Belbin Form</p>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-8">
        <div className="flex items-center justify-center gap-16 mt-4">
          <Button
            isDisabled={step <= 0}
            radius="full"
            onPress={() => setStep(step - 1)}
          >
            Back
          </Button>
          <Badge
            color="success"
            content={`Points Left: ${pointsLeft}`}
            isInvisible={
              steps[step].component !== StepsComponents.Form || pointsLeft === 0
            }
            showOutline={false}
            variant="flat"
          >
            <Button
              isDisabled={
                step === stepsLength ||
                (steps[step].component === StepsComponents.Form &&
                  pointsLeft !== 0)
              }
              radius="full"
              onPress={() => setStep(step + 1)}
            >
              Next
            </Button>
          </Badge>
        </div>
        <div className="w-full flex items-center justify-center">
          <Progress
            className="min-w-96 w-96"
            showValueLabel={true}
            value={(step / stepsLength) * 100}
          />
        </div>
      </div>
      {dynamicComponent()}
    </div>
  );
};
