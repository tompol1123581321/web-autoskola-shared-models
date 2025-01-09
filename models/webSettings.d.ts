type TermOption = {
  label: string;
  id: string;
};

export type WebSettings = {
  priceList: Array<{ label: string; value: number }>;
  termOptions: Array<TermOption>;
};
