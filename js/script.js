// Menangkap elemen navbar
const navbar = document.querySelector(".navbar");

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", () => {
  // Jika halaman di-scroll lebih dari 50px, tambahkan kelas 'scrolled'
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let totalSlides = slides.length;

function nextSlide() {
  let nextIndex = (currentIndex + 1) % totalSlides;

  slides[nextIndex].classList.add("active");

  setTimeout(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = nextIndex;
  }, 50);
}

// Pastikan slide pertama langsung muncul
slides[currentIndex].classList.add("active");

setInterval(nextSlide, 5000);

// Tampilkan tombol saat scroll ke bawah
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Aksi saat tombol diklik
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
