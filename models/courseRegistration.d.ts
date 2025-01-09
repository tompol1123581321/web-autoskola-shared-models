export type RegistrationFormData = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  notes: string;
  termId: string;
  registrationDate: Date;
};

export type RegistrationFormDataFilter = Partial<{
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  notes: string;
  termId: string;
  registrationDateWindow: { from: string; to: string };
}>;

export type RegistrationsPaginationParams = { page: number; pageSize: number };
export type RegistrationsSortingParams = {
  key: keyof RegistrationFormData;
  direction: "DESC" | "ASC";
};

export type RegistrationsFilter = {
  sortParams: RegistrationsSortingParams;
  dataFilterParams: RegistrationFormDataFilter;
  paginationsParams: RegistrationsPaginationParams;
};

export type Term = {
  id: string;
  label: string;
  registrations: Array<Omit<RegistrationFormData, "term">>;
  termConfig: { maxRegistrationsCount: number };
  isActive: boolean;
  created: Date;
};
