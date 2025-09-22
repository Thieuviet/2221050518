let hoTen = " thieu van viet ";
document.writeln(hoTen + "<br>");

const pi = 3.14;
document.writeln(pi + "<br>");

let soThuNhat = 10;
let soThuHai = "10";

let thongTinSinhVien = {
    hoTen: " thieu van viet",
    tuoi: 20,
    gioiTinh: true,
    lop: "khoa hoc may tinh k68"
}



let diaChiSinhVien = {
    thanhPho: "Ha Noi",
    huyen: "dan phuong ",
    soNha: 96,
}

thongTinSinhVien.diaChi=diaChiSinhVien;
ketqua = soThuNhat !== soThuHai;
document.writeln(ketqua + "<br>");

document.writeln(" xin chao" 
    + thongTinSinhVien.hoTen 
    + " lop " 
    + thongTinSinhVien.lop
    + thongTinSinhVien.diaChi.huyen
    + thongTinSinhVien.diaChi.thanhPho
);