import numeral from "numeral";

export const formatNumber = (amount) => {
  return numeral(amount).format("0,0");
};

export const hasAtLeast2Characters = (number) => {
  return numeral(number).format("0,0").padStart(2, 0);
};
