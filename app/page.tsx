"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { handleForm } from "./ations";
import { useActionState } from "react";

export default function Home() {
  const [state, action] = useActionState(handleForm, {
    potato: 1,
  } as any);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="text-5xl mx-auto mt-16">🔥</div>
      <form action={action} className="flex flex-col gap-3">
        <div className="relative w-full">
          {/* SVG 아이콘 */}
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            ></path>
          </svg>

          {/* Input Box */}
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={[]}
          />
        </div>

        <div className="relative w-full">
          {/* SVG 아이콘 */}
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            ></path>
          </svg>

          {/* Input Box */}
          <FormInput
            name="username"
            type="username"
            placeholder="Username"
            required
            errors={[]}
          />
        </div>

        <div className="relative w-full">
          {/* SVG 아이콘 */}
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            ></path>
          </svg>

          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={[state.errors ?? []]}
          />
        </div>

        <FormButton text="로그인" />
      </form>
    </div>
  );
}
