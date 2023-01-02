export const createNumberId = () => {
  const date = new Date().getTime();
  const randomNumber = Math.random();

  return Math.round(date + randomNumber);
};
