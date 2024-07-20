import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/client.actions";
import Image from "next/image";
import React from "react";
import * as Sentry from "@sentry/nextjs";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            alt="Backdoor's logo"
            src={"/icons/logo.png"}
            height={1000}
            width={1000}
            priority={true}
            className="mb-18 h-40 w-fit -translate-x-14"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 Backdoor</p>
        </div>
      </section>
      <Image
        src={"/images/door.jpg"}
        height={1000}
        width={1000}
        alt="Backdoor's Door"
        className="side-img max-w-[390px] object-cover object-top"
      />
    </div>
  );
};

export default Register;
