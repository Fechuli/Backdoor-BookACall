export const PriceOptions = ["<10000€", ">10000€"] as const;
export const FindUsOption = ["Awwwards", "Instagram", "LinkedIn", "Other"] as const;

export const ClientsFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  budget: "<10000€" as Budget,
  occupation: "",
  organization: "",
  details: "",
  findUs: "Awwwards" as FindUs,
  serviceAgreement: false,
  dataUsageConsent: false,
  privacyConsent: false,
};


export const Consultants = [
  {
    image: "/images/team/tommaso.jpeg",
    name: "Tommaso Anzidei | Project Manager",
  },
  {
    image: "/images/team/federico.jpeg",
    name: "Federico Fiaschi | Developer",
  },
  {
    image: "/images/team/lorenzo.jpeg",
    name: "Lorenzo Bonacchi | UX/UI Designer",
  },
  {
    image: "/images/team/duccio.jpeg",
    name: "Duccio Schiumarini | Art Director",
  }
];

export const StatusIcon = {
  scheduled: "/icons/check.svg",
  pending: "/icons/pending.svg",
  cancelled: "/icons/cancelled.svg",
};