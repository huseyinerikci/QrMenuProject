const menuList = document.getElementById("menu-list");

//Menu elemenlarını render eden fonksiyon
export const renderCrads = (data) => {
  const cardHtml = data
    .map(
      (item) =>
        `<a
        href="detail.html?id=${item.id}"
        id="card"
        class="d-flex flex-column flex-md-row text-dark text-decoration-none gap-3 m-4"
      >
        <img src="${
          item.img
        }" alt="card-img" class="rounded img-fluid shadow" />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
          </div>
          <p class="lead">
          ${item.desc}
          </p>
        </div>
      </a>`
    )
    .join("");
  menuList.innerHTML = cardHtml;
};

//ürün detay sayfasını render eden fonksiyon
export const renderDetailPage = (product, outlet) => {
  outlet.innerHTML = `
<div class="d-flex justify-content-between fs-6">
        <a href="/">
          <img width="35px" src="images/home.png" alt="" />
        </a>
        <p>anasayfa / ${product.category} / ${product.title.toLowerCase()} </p>
      </div>
      <h1 class="text-center my-4">${product.title}</h1>
      <img
        src="${product.img}"
        alt="detail-img"
        style="max-height: 400px"
        class="rounded object-fit-cover shadow"
      />
      <h4 class="mt-4">
        Ürünün Kategorisi: <span class="text-success">${product.category}</span>
      </h4>
      <h4 class="mt-4">
        Ürünün Fiyatı: <span class="text-success">${(
          product.price * 30
        ).toFixed(2)}₺</span>
      </h4>
      <p class="lead">${product.desc}</p>`;
};

//ürün bulunamdı sayfası fonksiyonunu oluştur
export const renderNotFoundedPage = (outlet) => {
  outlet.innerHTML = `
  <div style='height:90vh' class='d-flex flex-column justify-content-center align-items-center gap-3'>
  <h1>Aradığınız ürün mevcut değil</h1>
  <a href='/' class="d-flex align-items-center gap-2"> 
  <img width="30px" src="images/home.png" alt="" />
     <span class="fs-5">Anasayfaya Dönün</span>
     </a>
  </div>
  `;
};
