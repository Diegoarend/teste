export const GetDate = (movieData) => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let data = new Date(movieData);
  let FormatedData =
    data.getDate() +
    " de " +
    months[data.getMonth()] +
    " de " +
    data.getFullYear();
  return FormatedData;
};
