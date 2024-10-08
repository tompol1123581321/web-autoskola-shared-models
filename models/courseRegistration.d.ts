type SelectTermOption = {
  label: string;
  value: string;
  amountOfFreeSpaces: number;
};

type CourseVersionOption = { label: string; value: number };

type VehicleType = "A" | "B" | "A2";
type TermTime = "March" | "June" | "September" | "December";
type VehicleTypeConfig = {
  termOptions: Array<SelectTermOption>;
  courseVersionOptions: Array<CourseVersionOption>;
};

export type RegistrationFormConfig = Record<VehicleType, VehicleTypeConfig>;

export type RegistrationFormData = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  notes: string;
  type: VehicleType;
  termId: string;
  registrationDate: Date;
};

export type RegistrationFormDataFilter = Partial<{
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  notes: string;
  type: VehicleType;
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
  _id?: number;
  termTime: TermTime;
  label: string;
  registrations: Array<Omit<RegistrationFormData, "term">>;
  termConfig: Record<VehicleType, number>;
  isActive: boolean;
  created: Date;
};
