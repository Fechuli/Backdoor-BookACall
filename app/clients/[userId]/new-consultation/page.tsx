import ConsultationForm from "@/components/forms/ConsultationForm";
import { getClient } from "@/lib/actions/client.actions";
import Image from "next/image";
import * as Sentry from "@sentry/nextjs";


export default async function NewConsultation({params: {userId}}: SearchParamProps) {
  const client = await getClient(userId);

  Sentry.metrics.set("user_view_new-appointment", client.name);

  return (
    <div className="flex h-screen max-h-screen lg:overflow-hidden">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            alt="Backdoor's logo"
            src={"/icons/logo.png"}
            height={1000}
            width={1000}
            priority={true}
            className="mb-18 h-40 w-fit -translate-x-14"
          />
          {/* @ts-ignore */}
          <ConsultationForm type="create" userId={userId} clientId={client?.$id}/>
          <p className="copyright mt-10 py-12">
            © 2024 Backdoor
          </p>
        </div>
      </section>
      <Image
        src={"/images/mobile.webp"}
        height={1000}
        width={1000}
        alt="consultation"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
