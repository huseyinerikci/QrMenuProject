import { fetchMenu } from "./api.js";
import { renderCrads } from "./ui.js";

//sayfanın yüklenmesi alanı
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  renderCrads(data.menu);

  //İnput elemanlarına erişip id'lerine göre filtreleme
  const inputs = document.querySelectorAll("#buttons input");

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;

      //eğer category hepsi seçili ise
      if (selected == "all") {
        renderCrads(data.menu);
      } else {
        //diğer kategoriler seçili
        const filtered = data.menu.filter((item) => item.category == selected);
        renderCrads(filtered);
      }
    });
  });
});
