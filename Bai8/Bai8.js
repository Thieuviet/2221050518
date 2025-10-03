const donHang = {
    maDonHang: "DH001",

    thongTinKhachHang: {
        hoTen: "Nguyễn Văn A",
        soDienThoai: "0987654321",
        laThanhVien: true,
    },

    sp1: {
        maSanPham: "SP01",
        tenSanPham: "Cà phê sữa",
        soLuong: 2,
        giaTien: 25000
    },
    sp2: {
        maSanPham: "SP02",
        tenSanPham: "Trà sữa trân châu",
        soLuong: 1,
        giaTien: 30000
    },
    sp3: {
        maSanPham: "SP03",
        tenSanPham: "Mát cha",
        soLuong: 3,
        giaTien: 35000
    },

    trangThaiThanhToan: false,
    diaChiGiaoHang: "123 Đường ABC, Quận 1, TP.HCM",
};
ketQua = (donHang.sp1.giaTien) * (donHang.sp1.soLuong)
    + (donHang.sp2.giaTien) * (donHang.sp2.soLuong)
    + (donHang.sp3.giaTien) * (donHang.sp3.soLuong);


let hoTen = "thiu vit";
let myString = "Hello";
// document.writeln(hoTen.length); độ dài
// document.writeln(myString[4]); gọi số tt
// document.writeln(myString.slice(1,4)); lấy tt từ 1-4
// document.writeln(myString.replace("Hello", "he lo")); thay the
// document.writeln(myString.toLowerCase()); thay doi chu , dung trong tim kiem
// document.writeln(myString.indexOf("i")); kiem tra chuoi co ton tai hay khong
// document.writeln(myString.split('l')); chia chuoi thanh mang
// document.writeln(myString.startsWith('H')); tim chu dau


// SỐ
// var pi = 3.4159;
// document.writeln(pi.toFixed(0)); bỏ số sau dấu phẩy 
// document.writeln(isNAN(10));
// let toDay = new Date();
// document.writeln(toDay.getFullYear(), + toDay.getDate(), + toDay.getDay() + "<br>");


// MẢNG 

// let arr = [];
// let ten = 'ten';
// let thongTin = {
//     ten: ten
// }
// document.writeln(Array.isArray(arr)) để kiểm tra arr có phải là mảng không (và in ra kết quả).

// let arr = [1, 2, 3, 4, 'a', 'b', 'c', 2, 3];
// arr[3] = 6;

// document.writeln(arr.indexOf(3)); kiem tra co bao nhieu phan tu
// document.writeln(arr + "<br>");

// let a, b, c, d;
// a = [1, 2, 3];
// b = "java";
// c = [42, "JS"];
// d = a.concat(b, c);
// d = d.join("/") bien tu mang thanh chuoi
// d.pop();
// d.push(); xoa va them phan tu cuoi
// d.reverse(); dao phan tu 
// d.shift(); xoa phan tu dau tien 
// d.unshift(); them phan tu vao dau 
// document.writeln(d + "<br>");
// nối các mảng với nhau 

// let so = 100000000000000000000000000000001n;
// if (so % 2n == 0n) {
//     document.writeln("la so chan")
// } else {
//     document.writeln("so le" + "<br>")
// }
// let now = new Date().getHours;

// if (now >= 5 && now < 10) {
//     document.writeln("Chào sáng");
// } else if (now >= 10 && now < 13) {
//     document.writeln("Chào trưa");
// } else if (now >= 13 && now < 17) {
//     document.writeln("Chào chiều");
// } else if (now >= 17 && now < 22) {
//     document.writeln("Chào tối");
// } else {
//     document.writeln("Chào đêm");
// }


// let a = parseFloat(prompt("Nhập điểm A (0-10):"));
// let b = parseFloat(prompt("Nhập điểm B (0-10):"));
// let c = parseFloat(prompt("Nhập điểm C (0-10):"));

// if ((a < 0 || a > 10) || (b < 0 || b > 10) || (c < 0 || c > 10)) {
//     document.writeln("Điểm nhập không hợp lệ! Vui lòng nhập lại (0-10).");
// } else {
//     let tongDiem = a*0.6 + b*0.3 + c*0.1;

//     if (tongDiem < 4) {
//         document.writeln("F");
//     } else if (tongDiem < 5) {
//         document.writeln("D");
//     } else if (tongDiem < 7) {
//         document.writeln("C");
//     } else if (tongDiem < 8) {
//         document.writeln("B");
//     } else {
//         document.writeln("A");
//     }
// }

// 

// let n;
// do {
//     n = parseInt(prompt("Nhập số lượng môn học:"));
//     if (isNaN(n) || n <= 0) {
//         alert("Số môn học không hợp lệ, nhập lại!");
//     }
// } while (isNaN(n) || n <= 0);

// let tong = 0;
// for (let i = 1; i <= n; i++) {
//     let diem;
//     do {
//         diem = parseFloat(prompt("Nhập điểm môn " + i + " (0-10):"));
//         if (isNaN(diem) || diem < 0 || diem > 10) {
//             alert("Điểm không hợp lệ, nhập lại!");
//         }
//     } while (isNaN(diem) || diem < 0 || diem > 10);
//     tong += diem;
// }

// let tb = tong / n;

// TODO: Viết đoạn if...else để phân loại xếp hạng



// let thang = parseFloat(prompt("Nhập thang"));
// let nam = parseFloat(prompt("Nhập nam"));

// switch (thang) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.writeln("Thang co 31 ngay");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.writeln("Thang co 30 ngay ");
//         break;
//     case 2:
//         if ((nam % 4 == 0) || (nam % 400 == 0)) {
//             document.writeln("Thang co 29 ngay ");
//         } else {
//             document.writeln("Thang co 28 nhay");
//         }
//         break;
//     default:
//         document.writeln("Nhap sai nhe");
//         break;
// }


let danhSach = ["Dương Trần Nhật	Anh ", "Dương Vũ	Anh ", "Trần Vũ Hải	Anh ", "Bùi Ngọc	Bích ", "Phạm Quốc	Bình ", "Nguyễn Văn	Chung ", "Hoàng Mạnh	Cường ", "Ngô Hoàng	Dương ", "Phạm Văn	Đại ", "Nguyễn Đình	Đạt ", "Phạm	Đức ", "Vũ Trung	Đức ", "Phạm Hương	Giang ", "Phạm Quang	Hậu ", "Trần Văn	Hiệp ", "Nguyễn Văn	Hoàng ", "Phạm Quốc	Hoàng ", "Phạm Thị	Huế ", "Trần Công	Hùng ", "Đào Thế	Huy ", "Đỗ Quang	Huy ", "Phạm Quang	Huy ", "Phạm Thành	Khang ", "Bùi Văn	Khiêm ", "Nguyễn Tiến	Khởi ", "Đỗ Trung	Kiên ", "Vương Hà	Linh ", "Đào Quang	Lộc ", "Ngô Gia	Lộc ", "Bùi Văn	Mạnh ", "Nguyễn Văn	Mạnh ", "Phan Văn	Mạnh ", "Trương Công	Minh ", "Đỗ Thành	Nam ", "Lê Duy	Nam ", "Nguyễn Hoàng	Nam ", "Nguyễn Anh	Quân ", "Cao Thị Thu	Quyên ", "Phạm Gia	Tài ", "Nguyễn Thị Thanh	Tâm © ", "Nguyễn Đình	Thái ", "Lưu Tiến	Thành ", "Trần Văn	Thành ", "Nguyễn Thị	Thúy ", "Nguyễn Thị	Thúy ", "Bùi Duy	Tiến ", "Nguyễn Văn	Tiến ", "Đỗ Văn	Trung ", "Phạm Đan	Trường ", "Lê Thị Cẩm	Tú ", "Phan Văn	Tuân ", "Cao Thái	Tuấn ", "Nguyễn Duy	Tuấn ", "Nguyễn Huy	Tuấn ", "Thiều Văn	Việt ", "Nguyễn Kiều	Vy"];
let demNguyen = danhSach.filter(ten => ten.startsWith("Nguyễn")).length;

document.writeln("Số bạn họ Nguyễn là: " + demNguyen);

alert("hello")
