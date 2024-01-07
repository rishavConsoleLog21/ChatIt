"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      messsage: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };

  return (
    <div
      className="
    py-4
    px-4
    bg-white
    border-t
    flex
    items-center
    gap-2
    lg:gap-4
    w-full
  "
    >
      <HiPhoto
        size={30}
        className="
      text-fuchsia-500
      "
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-start gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Type a message"
        />
        <button
          type="submit"
          className="
            rounded-full
            p-2
            bg-fuchsia-500
            hover:bg-fuchsia-600
            cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-fuchsia-600
            focus:border-transparent
            transition
        "
        >
            <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
