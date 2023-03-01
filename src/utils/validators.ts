export const someKeyIsEmpty = (obj: Record<string, unknown>) => {
  return Object.values(obj).some(
    (value) => value === "" || value === null || value === undefined
  );
};
