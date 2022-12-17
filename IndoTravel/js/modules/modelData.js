export const getData = async () => {
  const res = await fetch('./js/date.json');
  const data = await res.json();
  return data;
};