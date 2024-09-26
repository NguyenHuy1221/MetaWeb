let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Cuộn xuống -> ẩn header
    header.classList.add("header-hidden");
    header.classList.remove("header-active");
  } else {
    // Cuộn lên -> hiện header
    header.classList.remove("header-hidden");

    // Nếu cuộn không phải về top -> đổi màu header thành trắng
    if (scrollTop > 0) {
      header.classList.add("header-active");
    } else {
      // Nếu cuộn về vị trí đầu trang -> xóa lớp header-active để trở về như cũ
      header.classList.remove("header-active");
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Tránh trường hợp giá trị âm
});

function openLogin() {
  const loginContainer = document.querySelector(".float-login-container");
  const floatContent = document.querySelector(".float-content");

  if (loginContainer.style.display === "block") {
    // Ẩn container
    floatContent.style.opacity = "0"; // Giảm độ trong suốt của nội dung
    floatContent.style.transform = "translateY(-20px)"; // Di chuyển nội dung lên
    loginContainer.style.opacity = "0"; // Giảm độ trong suốt của container
    loginContainer.style.transform = "translateY(-20px)"; // Di chuyển container lên
    setTimeout(() => {
      loginContainer.style.display = "none"; // Ẩn sau khi kết thúc hiệu ứng
    }, 500); // Thời gian tương ứng với thời gian chuyển động
  } else {
    // Hiển thị container
    loginContainer.style.display = "block"; // Hiển thị
    setTimeout(() => {
      loginContainer.style.opacity = "1"; // Tăng độ trong suốt của container
      loginContainer.style.transform = "translateY(0)"; // Di chuyển container xuống
      floatContent.style.opacity = "1"; // Tăng độ trong suốt của nội dung
      floatContent.style.transform = "translateY(0)"; // Di chuyển nội dung xuống
    }, 10); // Thời gian chờ một chút trước khi bắt đầu hiệu ứng
  }
}

// Đảm bảo rằng khi nhấp ra ngoài menu, nó sẽ đóng lại
document.addEventListener("click", function (event) {
  const loginContainer = document.querySelector(".float-login-container");
  const loginIcon = document.getElementById("login-icon");

  if (
    !loginIcon.contains(event.target) &&
    !loginContainer.contains(event.target)
  ) {
    loginContainer.style.display = "none"; // Ẩn khi nhấp bên ngoài
  }
});

function toggleMenu() {
  const hiddenList = document.querySelector(".hidden-list-mobile");
  hiddenList.classList.toggle("show-menu");
  document.body.classList.toggle("no-scroll");
  console.log(1);
}

document.getElementById("areas-of-work").addEventListener("click", function () {
  const dropMenu = document.querySelector(".drop-menu");
  dropMenu.classList.toggle("show");
});

const banner = document.querySelector(".banner");

function handleScroll(event) {
  const maxScrollLeft = banner.scrollWidth - banner.clientWidth;

  if (banner.scrollLeft >= maxScrollLeft && event.deltaY > 0) {
    // Nếu đã cuộn hết và cuộn tiếp, cho phép cuộn trang
    window.scrollBy({
      top: event.deltaY, // Cuộn xuống dưới phần body
      behavior: "smooth",
    });
  } else if (banner.scrollLeft === 0 && event.deltaY < 0) {
    // Nếu đã ở đầu danh sách và cuộn ngược lại, cho phép cuộn trang lên trên
    window.scrollBy({
      top: event.deltaY, // Cuộn lên trên phần body
      behavior: "smooth",
    });
  } else {
    // Vẫn ở trong vùng có thể cuộn ngang, ngăn cuộn trang và chỉ cuộn ngang
    event.preventDefault();
    banner.scrollBy({
      left: event.deltaY > 0 ? 200 : -200,
      behavior: "smooth",
    });
  }
}

// Gắn sự kiện cuộn cho phần banner
banner.addEventListener("wheel", handleScroll);

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Kiểm tra xem phần tử đã có lớp 'active' chưa
    const isActive = this.parentElement.classList.contains("active");

    // Xóa lớp 'active' khỏi tất cả các phần tử li
    navLinks.forEach((link) => link.parentElement.classList.remove("active"));

    // Nếu phần tử chưa có lớp 'active', thêm lớp 'active' cho nó
    if (!isActive) {
      this.parentElement.classList.add("active");
    }
  });
});

window.addEventListener("load", function () {
  const bannerContent = document.querySelector(".banner-content");
  bannerContent.classList.add("show"); // Thêm lớp `show` khi trang được tải
});

window.addEventListener("load", function () {
  const bannerImage = document.querySelector(".banner-image");
  bannerImage.classList.add("show"); // Thêm lớp `show` khi trang được tải
});
