"use client";

import { Progress } from "@nextui-org/progress";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
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
import { steps, questions } from "@/constants/index";

export const Belbin = () => {
  const [step, setStep] = useState(2);

  const stepsLength = Number(steps.length - 1);

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
              type="number"
              variant="bordered"
            />
          </TableCell>
        </TableRow>
      ),
    );

    return (
      <Table isCompact isStriped aria-label="Example static collection table">
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
        return <p>Results</p>;
      default:
        return <p>Belbin Form</p>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {dynamicComponent()}
      <div className="w-96">
        <Progress showValueLabel={true} value={(step / stepsLength) * 100} />
        <div className="flex items-center justify-center gap-16 mt-4">
          <Button
            isDisabled={step <= 0}
            radius="full"
            onPress={() => setStep(step - 1)}
          >
            Back
          </Button>
          <Button
            isDisabled={step === stepsLength}
            radius="full"
            onPress={() => setStep(step + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
