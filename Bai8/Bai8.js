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
let toDay = new Date();
document.writeln(toDay.getFullYear(), + toDay.getDate(), + toDay.getDay());