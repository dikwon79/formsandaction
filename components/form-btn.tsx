"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  //loading: boolean;
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 bg-neutral-300
       disabled:bg-neutral-400
       disabled:text-neutral-300
       disabled:cursor-not-allowed rounded-full"
    >
      {pending ? "Loading....." : text}
    </button>
  );
}
