"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormFieldType } from "./ClientForm";
import { SelectItem } from "../ui/select";
import { Consultants } from "@/constants";
import Image from "next/image";
import { createAppointment } from "@/lib/actions/appointment.action";
import { getAppointmentSchema } from "@/lib/validation";

const ConsultationForm = ({
  userId,
  clientId,
  type,
}: {
  userId: string;
  clientId: string;
  type: "create" | "schedule" | "cancel";
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
        bdMember: "",
        schedule: new Date(),
        features: "",
        note: "",
        cancellationReason: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
    setIsLoading(true);

    let status;
    switch (type) {
        case 'schedule':
            status = 'scheduled';
            break;
        case 'cancel':
            status = 'cancelled';
            break;
        default:
            status = 'pending';
            break;
    }

    try {
      if (type === "create" && clientId ) {
        const appointmentData = {
            userId,
            client: clientId,
            bdMember: values.bdMember,
            schedule: new Date(values.schedule),
            features: values.features as string,
            note: values.note,
            status: status as Status
        }

        const appointment = await createAppointment(appointmentData);

        if (appointment) {
            form.reset();
            router.push(`/clients/${userId}/new-consultation/success?appointmentId=${appointment.$id}`);
        }

      }
    } catch (error) {
      console.log(error);
    }
  }

  let buttonLabel;

  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Consultation";
      break;
    case "create":
      buttonLabel = "Request Consultation";
      break;
    case "schedule":
      buttonLabel = "Schedule Consultation";
      break;
    default:
      break;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">New Consultation</h1>
          <p className="text-dark-700">
            Request a new appointment in 10 second
          </p>
        </section>

        {type !== "cancel" && (
          <>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="bdMember"
              label="Who do you want to talk to?"
              placeholder="Select a member"
            >
              {Consultants.map((consultant) => (
                <SelectItem key={consultant.name} value={consultant.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={consultant.image}
                      width={32}
                      height={32}
                      alt={consultant.name}
                      className="rounded-full border border-dark-500"
                    />
                    <p>{consultant.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="When do you want to talk?"
              showTimeSelect
              dateFormat="MM/dd/yyyy h:mm aa"
            />

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="features"
                label="What type of features are you looking for?"
                placeholder="Describe the features you want to discuss"
              />

              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="note"
                label="Notes"
                placeholder="Enter notes"
              />
            </div>
          </>
        )}

        {type === "cancel" && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for cancellation"
            placeholder="Enter the reason for cancellation"
          />
        )}

        <SubmitButton
          isLoading={isLoading}
          className={`${
            type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"
          } w-full`}
        >{buttonLabel}</SubmitButton>
      </form>
    </Form>
  );
};

export default ConsultationForm;
