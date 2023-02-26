export const parseStringLength = (str: string) =>
  str.length > 16 ? str.slice(0, 16) + "..." : str;
