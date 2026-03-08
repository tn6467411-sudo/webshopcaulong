// Lấy phần tử menu icon và menu dropdown
const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Khi click vào dấu ba gạch → mở/đóng menu
if (menuIcon && dropdownMenu) {
  menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
  });
}

// Khi click ra ngoài menu → tự động đóng
document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('active');
  }
});