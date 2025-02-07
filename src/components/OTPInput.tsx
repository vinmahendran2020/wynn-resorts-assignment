'use client';

import { ChangeEvent, FC, KeyboardEvent, useRef } from "react";
import { Controller, UseFormRegister } from "react-hook-form";
import Row from "./Row";

import { IFormInput } from "@/types";
import { Control } from "react-hook-form";
import cn from "./utils/classnames";

interface OTPInputProps {
  control: Control<any>;
  register: UseFormRegister<IFormInput>; 
  formState: {
    errors: Record<string, any>;
  };
}

const OTPInput: FC<OTPInputProps> = ({ control, formState: { errors } }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Row className="gap-2 items-center justify-center">
      {Array.from({ length: 4 }).map((_, index) => (
        <Controller
          key={index}
          name={`otp${index}`}
          control={control}
          defaultValue=""
          rules={{ required: "Required" }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className={cn(errors[`otp${index}`] ? "!border-red-500" : "border-gray-400", 'w-12 h-12 text-center text-2xl border border-orange-180 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500')}
              onChange={(e) => {
                field.onChange(e);
                handleChange(e, index);
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          )}
        />
      ))}
    </Row>
  );
};

export default OTPInput;
