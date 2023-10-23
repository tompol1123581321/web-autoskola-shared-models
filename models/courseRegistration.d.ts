type SelectTermOption = {
  label: string;
  value: number;
  amountOfFreeSpaces: number;
};

type CourseVersionOption = { label: string; value: number };

type VehicleType = "A" | "B" | "Combination";
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
  courseVersion: string;
  term: number;
};

export type Term = {
  id: number;
  label: string;
  registrations: Array<Omit<RegistrationFormData, "term">>;
  termConfig: Record<VehicleType, number>;
  isActive: boolean;
  created: Date;
};
