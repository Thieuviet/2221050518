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


let a = 10 ;
let b = 9 ;
let c = 8 ;
let tongDiem = a*0.6 + b*0.3 + c*0.1;
if (tongDiem >= 0 && tongDiem < 4) {
    document.writeln("F");
} else if (tongDiem >= 4 && tongDiem < 5) {
    document.writeln("D");
} else if (tongDiem >= 5 && tongDiem < 7) {
    document.writeln("C");
} else if (tongDiem >= 7 && tongDiem < 8) {
    document.writeln("B");
} else {
    document.writeln("A");
}
