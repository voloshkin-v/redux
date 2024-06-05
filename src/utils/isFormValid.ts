interface Values {
  [key: string]: string;
}

export const isFormValid = (formValues: Values) => {
  const values = Object.values(formValues);

  return values.filter(Boolean).length === values.length;
};
