"use client";

import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/input/Input";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios call to register
    }
    if (variant === "LOGIN") {
      // Axios call to login
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //nextAuth
  };

  return (
    <div
      className="
            mt-8
            sm:mx-auto sm:w-full sm:max-w-md
        "
    >
      <div
        className="
            bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input id="email" label="Email" register={register} errors={errors}/>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
