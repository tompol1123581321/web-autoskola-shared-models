import { RegistrationFormData } from "./courseRegistration";

export type Term = {
  id: string;
  label: string;
  registrations: Array<RegistrationFormData>;
  termConfig: { maxRegistrationsCount: number };
  isActive: boolean;
  created: Date;
};

export type TermFilter = Partial<{
  isActive: boolean;
  nameContains: string;
  created: { from: string; to: string };
}>;
