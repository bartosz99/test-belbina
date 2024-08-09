"use client";

import { Progress } from "@nextui-org/progress";
import { useState } from "react";
import { Button } from "@nextui-org/button";

import { steps } from "@/constants/index";

export const Belbin = () => {
  const stepsLength = Number(steps.length - 1);
  const [step, setStep] = useState(0);

  return (
    <div>
      <p>{steps[step].name}</p>
      <Progress showValueLabel={true} value={(step / stepsLength) * 100} />
      <div className="flex gap-8">
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
  );
};
