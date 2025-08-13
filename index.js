const slides = [
  {
    img: "https://acihome.vn/uploads/19/thiet-ke-khach-san-cao-cap-ket-hop-giua-tham-my-cong-nang-4.jpg",
    text: "Khách Sạn Biển Xanh tọa lạc ngay trung tâm thành phố biển Nha Trang, với 120 phòng view biển, hồ bơi vô cực và nhà hàng 5 sao."
  },
  {
    img: "https://amia.vn/wp-content/uploads/2021/08/tranh-trang-tri-tuong-phong-khach-san.jpg",
    text: "Phòng nghỉ rộng rãi, trang bị đầy đủ tiện nghi hiện đại, mang lại cảm giác thoải mái như ở nhà."
  },
  {
    img: "https://vinapad.com/wp-content/uploads/2019/07/cac-goi-dich-vu-spa-8.jpg",
    text: "Tận hưởng không gian yên tĩnh cùng dịch vụ chăm sóc khách hàng tận tâm, chuyên nghiệp."
  }
];

let currentSlide = 0;
const imgEl = document.querySelector(".about-content img");
const textEl = document.querySelector(".about-content p");

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

function updateSlide() {
  imgEl.src = slides[currentSlide].img;
  textEl.textContent = slides[currentSlide].text;
}
