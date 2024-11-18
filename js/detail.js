import { renderDetailPage, renderNotFoundedPage } from "./ui.js";

//URL parametre yönetilmesi
const params = new URLSearchParams(window.location.search);

//get ile ilgili url parametrenin alınması
const id = parseInt(params.get("id"));

//ürün detayının katarılacağı eleman
const outlet = document.getElementById("outlet");

//sayfa yüklenmesi ile gerçekleşecek fonksiyon
document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();
  const product = data.menu.find((item) => item.id === id);

  //eğer ürün yoksa ürün bulunamadı sayfasına git
  if (!product) {
    renderNotFoundedPage(outlet);
  } else {
    // varsa render et
    renderDetailPage(product, outlet);
  }
});
