"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { ClientFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/client.actions";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const ClientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof ClientFormValidation>>({
    resolver: zodResolver(ClientFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ClientFormValidation>) {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) router.push(`/clients/${newUser.$id}/register`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your call with Backdoor.</p>
        </section>
        <CustomFormField
          iconAlt="user"
          iconSrc="/icons/user.svg"
          placeholder="Tommaso Anzidei"
          label="Full Name"
          name="name"
          fieldType={FormFieldType.INPUT}
          control={form.control}
        />
        <CustomFormField
          iconAlt="email"
          iconSrc="/icons/email.svg"
          placeholder="tommaso@backdoor-studio.com"
          label="Email"
          name="email"
          fieldType={FormFieldType.INPUT}
          control={form.control}
        />
        <CustomFormField
          iconAlt="phone"
          iconSrc="/icons/email.svg"
          placeholder="+39 335 585 6366"
          label="Phone number"
          name="phone"
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default ClientForm;
