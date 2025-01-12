export type Term = {
  id: string;
  label: string;
  registrations: Array<Omit<RegistrationFormData, "term">>;
  termConfig: { maxRegistrationsCount: number };
  isActive: boolean;
  created: Date;
};

export type TermFilter = Partial<{
  isActive: boolean;
  nameContains: string;
  created: { from: string; to: string };
}>;
