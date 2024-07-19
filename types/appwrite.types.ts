import { Models } from "node-appwrite";

export interface Client extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  occupation: string;
  organization: string;
  budget: Budget;
  details: string;
  findUs: FindUs;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  client: Client;
  schedule: Date;
  status: Status;
  bdMember: string;
  features: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
