import { isArray } from "lodash";

export const mapOrder = (array, order, key) => {
  if (!isArray(array) || !isArray(order) || !key) return undefined;

  const newArray = [...array];
  newArray.sort((a, b) => newArray.indexOf(a[key]) - order.indexOf(b[key]));
  return newArray;
};

export const findInArr = (
  array,
  comparativeValue,
  comparativeField = "id",
  returnKey
) => {
  if (!isArray(array) || array?.length === 0) return undefined;

  const result = array.find(
    (item) => item?.[comparativeField] === comparativeValue
  );
  return result && returnKey ? result?.[returnKey] : result;
};
