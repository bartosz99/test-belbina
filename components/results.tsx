"use client";
import { Card, CardBody } from "@nextui-org/card";

import { Roles } from "@/enums/index";
import { maxResultsPoints, resultNames } from "@/constants";
import { capitalizedCase } from "@/helpers";

type Props = {
  points: Record<keyof typeof Roles, number[]>;
};

export const Results = ({ points }: Props) => {
  const groupedResults: Record<number, JSX.Element[]> = {};

  Object.entries(points).forEach(([role, points]) => {
    const sum = points.reduce((acc, curr) => acc + curr, 0);
    const score = maxResultsPoints[role as keyof typeof Roles].findIndex(
      (value) => value > sum - 1,
    );

    const resultCard = (
      <div key={role} className="">
        <Card className="">
          <CardBody>
            <p className="text-xl">
              {capitalizedCase(Roles[role as keyof typeof Roles])}
            </p>
            <p className="text-default-600 dark:text-default-300">
              {resultNames[score as keyof typeof resultNames]}
            </p>
          </CardBody>
        </Card>
      </div>
    );

    if (!groupedResults[score]) {
      groupedResults[score] = [];
    }
    groupedResults[score].push(resultCard);
  });

  return (
    <div className="min-w-96">
      <div className="flex flex-col-reverse items-center justify-center max-w-3xl gap-8">
        {Object.entries(groupedResults).map(([score, resultGroup]) => (
          <div key={score} className="w-full">
            <div className="flex items-center justify-center flex-wrap gap-8">
              {resultGroup}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
