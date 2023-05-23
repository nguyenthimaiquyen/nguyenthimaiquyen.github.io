function onDangKi() {
    // ẩn phần đăng nhập, hiển thị div đăng ký
    var divdki = document.getElementById("divdangki");
    var divdnhap = document.getElementById("divdangnhap");

    divdki.style.display = "block";
    divdnhap.style.display = "none";
}

function onDangNhap() {
    // ẩn phần đăng ký, hiển thị div đăng nhập
    var divdki = document.getElementById("divdangki");
    var divdnhap = document.getElementById("divdangnhap");

    divdki.style.display = "none";
    divdnhap.style.display = "block";
}

// hàm kiểm tra trường dữ liệu bắt buộc đăng ký
function kiemTraBatBuocDangKi() {
    var pthongbao = document.getElementById("pthongbao");
    var nghenghiep = document.getElementById("nghenghiep");
    var nam = document.getElementById("nam");
    var nu = document.getElementById("nu");
    if(frmdangki.tendangnhap.value == "" || frmdangki.matkhau.value == ""
        || frmdangki.email.value == "" || frmdangkii.tuoi.value == "") {

        frmdangki.tendangnhap.style.border = "solid 2px red";
        frmdangki.matkhau.style.border = "solid 2px red";
        frmdangki.email.style.border = "solid 2px red";
        frmdangki.tuoi.style.border = "solid 2px red";
        pthongbao.style.display = "block";       

        pthongbao.innerHTML = "Bạn cần nhập dữ liệu cho các trường đầy đủ!";
        return false;
    } else if(nghenghiep.selectedIndex == 0) {
        pthongbao.style.display = "block";   
        pthongbao.innerHTML = "Bạn phải chọn nghề nghiệp <br>";
        return false;
    } else if (!nam.checked && !nu.checked){
        pthongbao.style.display = "block";   
        pthongbao.innerHTML = "Bạn phải chọn giới tính <br>";
        return false;
    } else {
        pthongbao.style.display = "none";
        return true;
    }

}

function kiemTraHopLe() {
    return kiemTraBatBuocDangKi();
}

