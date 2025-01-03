import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodSchema } from "zod";

const useZodForm = (
  schema: ZodSchema,
  mutation: UseMutateFunction,
  defaultValues?: any
) => {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),

    defaultValues: {
      ...defaultValues,
    },
  });
  const onFormSubmit = handleSubmit(async (values) => mutation({ ...values }));
  return {
    register,
    reset,
    watch,
    onFormSubmit,
    errors,
  };
};

export default useZodForm;