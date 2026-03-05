console.log("Hello from JavaScript!");

// ===== Hoạt động 1 - tính tuổi (đổi theo thông tin của bạn) =====
let name = "An";        // TODO: đổi tên bạn
let yearOfBirth = 2005; // TODO: đổi năm sinh bạn
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");

// (Tuỳ chọn) bấm nút runBtn để kiểm tra JS có bắt sự kiện không
const runBtn = document.getElementById("runBtn");
runBtn.addEventListener("click", function () {
  document.getElementById("welcome").textContent = "JavaScript đã chạy rồi!";
});

// ===== Hoạt động 2 - if/else =====
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// ===== Hoạt động 2 - hàm =====
// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// TODO: Viết thêm hàm xepLoai(avg)
function xepLoai(avg) {
  // avg >= 8   -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5   -> "Trung bình"
  // còn lại    -> "Yếu"
  if (avg >= 8) return "Giỏi";
  else if (avg >= 6.5) return "Khá";
  else if (avg >= 5) return "Trung bình";
  else return "Yếu";
}

// (Tuỳ chọn) Test nhanh
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);

// ===== Mở rộng nhỏ (tuỳ chọn) =====
function kiemTraTuoi(age) {
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
  if (age >= 18) console.log("Đủ 18 tuổi");
  else console.log("Chưa đủ 18 tuổi");
}

kiemTraTuoi(16);
kiemTraTuoi(20);