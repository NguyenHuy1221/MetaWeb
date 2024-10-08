let lastScrollTop = 0;
const header = document.querySelector("header");
const py3Element = document.querySelector(".py-3");
const logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    // Khi cuộn xuống, thêm class để làm trắng background và đổi màu chữ thành đen
    header.classList.add("header-active");
    py3Element.classList.add("no-gradient"); // Tắt gradient khi cuộn xuống
    logo.src = "https://meet.wa-employeereferrals.com/assets/images/logo.svg";
  } else {
    // Khi cuộn về đầu trang, giữ nguyên trạng thái ban đầu
    header.classList.remove("header-active");
    py3Element.classList.remove("no-gradient"); // Bật lại gradient
    logo.src = "https://meet.wa-employeereferrals.com/assets/images/logo_white.svg";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Tránh giá trị âm
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

document.getElementById('scrollLink').addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

  // Cuộn đến phần mục tiêu
  document.getElementById('jobsSection').scrollIntoView({
    behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
  });
});