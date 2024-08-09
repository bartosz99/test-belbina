"use client";

type Props = {
  questions: any;
};

export const BelbinForm = ({ questions }: Props) => {
  return (
    <div>
      <p>Belbin Form COMPONENT</p>
      <div>{questions}</div>
    </div>
  );
};
