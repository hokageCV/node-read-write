import React from "react";

type TextCardProps = {
  lekh: string;
};

export default function TextCard({ lekh }: TextCardProps) {
  return (
    <div className="card w-96 bg-[#A3BE8C] shadow-xl m-2">
      <div className="card-body p-3">
        <p className="text-black">{lekh}</p>
      </div>
    </div>
  );
}
