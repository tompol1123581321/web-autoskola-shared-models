export type RegistrationFormData = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  notes: string;
  termId: string;
  registrationDate: Date;
};

export type RegistrationFormDataFilter = Partial<{
  userSearch: string; // Full-text search input
  activeTerms: boolean; // Checkbox to filter active or all terms
  termId: string; // Selected term ID from the searchable select
  registrationDate: { from: string; to: string }; // Registration date range
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
