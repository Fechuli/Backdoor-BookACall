import ClientForm from "@/components/forms/ClientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image alt="Backdoor's logo" src={"/icons/logo.png"} height={1000} width={1000} className="mb-12 h-30 w-fit -translate-x-16"/>
          <ClientForm />
          <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Backdoor</p>
          <Link href={"/?admin=true"} className="text-[#bdff00]">Admin</Link>
          </div>
        </div>
      </section>
      <Image src={"/images/team.jpeg"} height={1000} width={1000} alt="Backdoor's Team" className="side-img max-w-[50%]"/>
    </div>
  );
}
