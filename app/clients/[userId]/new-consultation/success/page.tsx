import { Button } from "@/components/ui/button";
import { Consultants } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.action";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Sentry from "@sentry/nextjs";
import { getUser } from "@/lib/actions/client.actions";


const SuccessPage = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);
  const user = await getUser(userId);

  const consultant = Consultants.find(
    (member) => member.name === appointment.bdMember
  );

  Sentry.metrics.set("user_view_success", user.name);

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href={"/"}>
          <Image
            src={"/icons/logo.png"}
            width={1000}
            height={1000}
            alt="logo"
            className="h-20 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src={"/gifs/success.gif"}
            alt="success"
            height={300}
            width={280}
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-[#bdff00]">consultation request</span>{" "}
            has been successfully submitted.
          </h2>
          <p>We will be in touch shortly to confirm</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details:</p>
          <div className="flex items-center gap-3">
            <Image
              src={consultant?.image!}
              alt="consultant"
              height={50}
              width={50}
              className="size-10 rounded-full"
            />
            <p className="whitespace-nowrap">
                {consultant?.name}
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={"/icons/calendar.svg"} alt="calendar" height={24} width={24} />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <Button variant={"outline"} className="bg-[#121619]" asChild>
            <Link href={`/clients/${userId}/new-consultation`}>New Appointment</Link>
        </Button>
        <p className="copyright">© 2024 Backdoor</p>

      </div>
    </div>
  );
};

export default SuccessPage;
