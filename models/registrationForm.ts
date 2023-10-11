export type RegistrationFormSettings = {
  registrationPageText: string;
  termOptions: Array<{
    label: string;
    value: string;
    amountOfFreeSpaces: number;
  }>;
};
