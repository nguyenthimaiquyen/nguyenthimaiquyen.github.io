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

function kiemTraEmail(idTag) {
    var inputTag = document.getElementById(idTag);
    var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    var pthongbao = document.getElementById("pthongbao");
    if (inputTag.value.match(email)) {
        pthongbao.style.display = "none";
        return true;
    } else {
        pthongbao.style.display = "block";
        pthongbao.innerHTML = "Hãy nhập email hợp lệ!";
        //pthongbao.style.color = "red";
        return false;
    }
}

function kiemTraMinMax(idTag, minlength, maxlength) {
    var inputText = document.getElementById(idTag);
    var field = inputText.value;
    var pthongbao = document.getElementById("pthongbao");
    if (field.length < minlength || field.length > maxlength) {
        pthongbao.style.display = "block";
        pthongbao.innerHTML = "Hãy nhập vào giá trị từ " + minlength + " đến " + maxlength;
       // theP.style.color = "red";
        return false;				
    } else {
        pthongbao.style.display = "none";
        return true;
    }
}


function kiemTraHopLe() {
    return kiemTraBatBuocDangKi() && kiemTraMinMax("tendangnhap", 6, 13) && kiemTraEmail("email");
}

