

export const GetDate=(movieData) =>{
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  let data = new Date(movieData);
  let FormatedData = ((data.getDate() + " de " + months[(data.getMonth())] + " de " + data.getFullYear()));
  return FormatedData

}