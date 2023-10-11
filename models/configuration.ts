import { RegistrationFormConfiguration } from "./registrationForm";
import type { ContactsPageData } from "./webSettings/contacts";
import type { HomePageData } from "./webSettings/home";
import type { PriceListPageData } from "./webSettings/priceList";
import type { RegistrationPageData } from "./webSettings/registration";
import type { StudiumPageData } from "./webSettings/studium";

export type Configuration = {
  pagesData: {
    home: HomePageData;
    priceList: PriceListPageData;
    contacts: ContactsPageData;
    studium: StudiumPageData;
    registration: RegistrationPageData;
  };
  registrationForm: RegistrationFormConfiguration;
};
