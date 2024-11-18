//db.json dan verileri  alma
export const fetchMenu = async () => {
  const res = await fetch("../db.json");
  const data = await res.json();
  return data;
};
