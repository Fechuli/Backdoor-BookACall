import ClientForm from "@/components/forms/ClientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Home({searchParams}: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image alt="Backdoor's logo" src={"/icons/logo.png"} height={1000} width={1000} priority={true} className="mb-18 h-40 w-fit -translate-x-14"/>
          <ClientForm />
          <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Backdoor</p>
          <Link href={"/?admin=true"} className="text-[#bdff00]">Admin</Link>
          </div>
        </div>
      </section>
      <Image src={"/images/team.avif"} height={1000} width={1000} alt="Backdoor's Team" className="side-img max-w-[50%]"/>
    </div>
    
  );
}
