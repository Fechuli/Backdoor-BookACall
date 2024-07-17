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
    image: "/images/dr-green.png",
    name: "Tommaso Anzidei",
  },
  {
    image: "/images/dr-cameron.png",
    name: "Federico Fiaschi",
  },
  {
    image: "/images/dr-livingston.png",
    name: "Lorenzo Bonacchi",
  },
  {
    image: "/images/dr-peter.png",
    name: "Duccio Schiumarini",
  }
];

export const StatusIcon = {
  scheduled: "/icons/check.svg",
  pending: "/icons/pending.svg",
  cancelled: "/icons/cancelled.svg",
};