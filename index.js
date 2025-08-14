// Dữ liệu đa ngôn ngữ
const translations = {
  vi: {
    title: "Khách Sạn Biển Xanh",
    subtitle: "Trải nghiệm nghỉ dưỡng sang trọng bên bờ biển Nha Trang",
    contact: "Liên hệ ngay cho chúng tôi:",
    aboutTitle: "Về Chúng Tôi",
    aboutContent: "Khách Sạn Biển Xanh tọa lạc ngay trung tâm thành phố biển Nha Trang, với 120 phòng view biển, hồ bơi vô cực và nhà hàng 5 sao.",
    bookingTitle: "Gửi yêu cầu đến chúng tôi",
    sendBtn: "Gửi yêu cầu",
    locationTitle: "Vị trí của chúng tôi",
    footer: "© 2025 Khách Sạn Biển Xanh - Hotline: 0845 225 205"
  },
  en: {
    title: "Blue Sea Hotel",
    subtitle: "Experience luxury beachside stay in Nha Trang",
    contact: "Contact us now:",
    aboutTitle: "About Us",
    aboutContent: "Blue Sea Hotel is located in the heart of Nha Trang, featuring 120 sea-view rooms, infinity pool, and a 5-star restaurant.",
    bookingTitle: "Send your request to us",
    sendBtn: "Send Request",
    locationTitle: "Our Location",
    footer: "© 2025 Blue Sea Hotel - Hotline: 0845 225 205"
  }
};

// Chuyển ngôn ngữ
function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
  document.querySelector('input[placeholder="Họ và Tên"]').placeholder = lang === "vi" ? "Họ và Tên" : "Full Name";
  document.querySelector('input[placeholder="Số Điện Thoại"]').placeholder = lang === "vi" ? "Số Điện Thoại" : "Phone Number";
  document.querySelector('input[placeholder="Email"]').placeholder = "Email";
  document.querySelector('input[placeholder="Số đêm"]').placeholder = lang === "vi" ? "Số đêm" : "Number of nights";
}

// Slider
const slides = [
  { img: "https://acihome.vn/uploads/19/thiet-ke-khach-san-cao-cap-ket-hop-giua-tham-my-cong-nang-4.jpg",
    text_vi: translations.vi.aboutContent, text_en: translations.en.aboutContent },
  { img: "https://amia.vn/wp-content/uploads/2021/08/tranh-trang-tri-tuong-phong-khach-san.jpg",
    text_vi: "Phòng nghỉ rộng rãi, trang bị đầy đủ tiện nghi hiện đại, mang lại cảm giác thoải mái như ở nhà.",
    text_en: "Spacious rooms with full modern amenities, making you feel at home." },
  { img: "https://vinapad.com/wp-content/uploads/2019/07/cac-goi-dich-vu-spa-8.jpg",
    text_vi: "Tận hưởng không gian yên tĩnh cùng dịch vụ chăm sóc khách hàng tận tâm, chuyên nghiệp.",
    text_en: "Enjoy a peaceful space with dedicated, professional customer service." }
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
  textEl.textContent = document.documentElement.lang === "en"
    ? slides[currentSlide].text_en
    : slides[currentSlide].text_vi;
}

// Modal phóng to
const modal = document.getElementById("modal");
const modalImg = modal.querySelector("img");
const modalText = modal.querySelector("p");
const closeBtn = modal.querySelector(".close");
document.querySelector(".about-content").addEventListener("click", () => {
  modal.style.display = "flex";
  modalImg.src = imgEl.src;
  modalText.textContent = textEl.textContent;
});
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
