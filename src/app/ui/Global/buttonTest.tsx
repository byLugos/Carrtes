"use client";

import Link from "next/link";

const ButtonTest = ({
  textButton,
  path,
}: {
  textButton: string;
  path: string;
}) => {
  return (
    <Link href={path}>
      <button className="w-[100px] h-11 bg-slate-800 text-slate-200">
        {textButton}
      </button>
    </Link>
  );
};

export { ButtonTest };
