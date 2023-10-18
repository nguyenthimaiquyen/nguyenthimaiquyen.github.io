//mảng json
let students = [
   {
     "id": 1,
     "name": "Nguyễn Thị Mai Quyên",
     "birthday": "24/03/1994",
     "phone": "0964806281",
     "hometown": "Thanh Trì, Hà Nội"
   },
   {
     "id": 2,
     "name": "Phùng Đức Huy",
     "birthday": "28/09/2000",
     "phone": "0907280919",
     "hometown": "Ân Thi, Hưng Yên"
   },
   {
     "id": 3,
     "name": "Phùng Thị Tuyết",
     "birthday": "10/04/1999",
     "phone": "0912364450",
     "hometown": "Uông Bí, Quảng Ninh"
   },
   {
     "id": 4,
     "name": "Nguyễn Văn Đồng",
     "birthday": "06/10/2001",
     "phone": "0965891245",
     "hometown": "Gia Lâm, Hà Nội"
   },
   {
     "id": 5,
     "name": "Phùng Văn Vương",
     "birthday": "02/08/1991",
     "phone": "0777768886",
     "hometown": "Gia Lâm, Hà Nội"
   }
 ]


//datepicker
$('#birthday').datepicker({
   dateFormat: "dd/mm/yy",
   minDate: "-100Y",
   maxDate: "-18Y"
});


//Hiển thị danh sách sinh viên
const studentList = document.querySelector("#student-detail");

const renderStudentList = (students) => {
   let htmls = "";
   students.forEach(student => {
      htmls += `
      <tr class="student-item-${student.id}">
         <td>
            <div>
               <input type="checkbox" class="ml-4 mt-2 student-checkbox">
            </div>
         </td>
         <td>${student.name}</td>
         <td>${student.birthday}</td>
         <td>${student.phone}</td>
         <td>${student.hometown}</td>
      </tr>
      `
   });
   const titleTable = `
   <tr>
      <td class=""></td>
      <td class="text-center px-5 font-weight-bold">Name</td>
      <td class="text-center font-weight-bold">Birthday</td>
      <td class="text-center font-weight-bold">Mobile phone</td>
      <td class="text-center font-weight-bold">Hometown</td>   
   </tr>
   `;
   studentList.innerHTML = titleTable + htmls;
}


//thêm sinh viên
function handleCreateForm(students) {
   const createBtn = document.querySelector('#save');
   //lắng nghe sự kiện click ở nút save
   createBtn.onclick = function() {
      //lấy dữ liệu của sinh viên ra
      let name = document.querySelector('input[name="name"]').value;
      let birthday = document.querySelector('input[name="birthday"]').value;
      let phone = document.querySelector('input[name="phone"]').value;
      let hometown = document.querySelector('input[name="hometown"]').value;

      if (name == "" || birthday == "" || phone == "" || hometown == "") {
         createBtn.classList.add('disable');         
         return;
      } else {
         createBtn.classList.remove('disable');      
      }

      let formData = {
         name: name,
         birthday: birthday,
         phone: phone,
         hometown: hometown
      };

      students.push(formData);
      renderStudentList(students);
      alert('You have added successfully student\'s information');
   }
}


//reset lại form
const resetBtn = document.querySelector('#reset');
resetBtn.onclick = function() {
   document.querySelector('input[name="name"]').value = "";
   document.querySelector('input[name="birthday"]').value = "";
   document.querySelector('input[name="phone"]').value = "";
   document.querySelector('input[name="hometown"]').value = "";
}


//xóa student
function handleDeleteStudent(students) {
   //lấy id của sinh viên cần xóa và nút delete
   const checkboxes = document.querySelectorAll('.student-checkbox');
   const deleteBtn = document.querySelector('#delete');
   //lắng nghe sự kiện khi ấn nút delete
   deleteBtn.onclick = function() {
      let atLeastOneChecked = false;

      //kiểm tra xem có ít nhất 1 checkbox được chọn không
      for (let i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
            atLeastOneChecked = true;
            //lấy ra hàng cần xóa
            const studentItem = document.querySelector('.student-item-' + (i + 1));
            if (studentItem) {
               if (confirm("Are you sure to delete student's information") == true) {
                  //xóa thông tin sinh viên trên html
                  studentItem.remove();
                  //xóa thông tin sinh viên khỏi mảng dữ liệu
                  students.splice(i, 1);
                  alert("You have deleted successfully student's information");
                } else {
                  return;
                }               
            }
         }
     }
     //nếu ko có checkbox nào được chọn thì thông báo
     if (!atLeastOneChecked) {
      alert("Please choose at least one student");
      }
   };   
}



//edit student
const handleEditStudent = function(students) {
   const checkboxes = document.querySelectorAll('.student-checkbox');
   const deleteBtn = document.querySelector('#edit');

   const nameInput = document.getElementById('name');
   const birthdayInput = document.getElementById('birthday');
   const phoneInput = document.getElementById('mobilephone');
   const hometownInput = document.getElementById('hometown');

   deleteBtn.onclick = function() {
      //đếm xem bao nhiêu checkbox được check
      let count = 0;
      for (let i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
            count++;
         }
      }

      if(count === 0) {
         alert("You must choose one student");
      } else if(count > 1) {
         alert("You should only choose one student");
      }

      if (count === 1) {
         for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
               //lấy dữ liệu của checkbox được check
               const studentSelected = document.querySelector('.student-item-' + (i + 1));
               console.log(studentSelected)
               let name = studentSelected.querySelector('td:nth-child(2)').innerText;
               let birthday = studentSelected.querySelector('td:nth-child(3)').innerText;
               let phone = studentSelected.querySelector('td:nth-child(4)').innerText;
               let hometown = studentSelected.querySelector('td:nth-child(5)').innerText;
               
               //đổ dữ liệu lên form-student
               nameInput.value = name;
               birthdayInput.value = birthday;
               phoneInput.value = phone;
               hometownInput.value = hometown;

               //xóa thông tin sinh viên trên html
               const studentItem = document.querySelector('.student-item-' + (i + 1));
               studentItem.remove();
               //xóa thông tin sinh viên khỏi mảng dữ liệu
               students.splice(i, 1);
               handleCreateForm(students);
            }
         }         
      }
   }
}


renderStudentList(students);
handleCreateForm(students);
handleDeleteStudent(students);
handleEditStudent(students);


// //lạc đề quá
// //đẩy dữ liệu từ json lên html
// const studentAPI = 'http://localhost:3000/Students';

// function start() {
//    getStudent(function(students) {
//       renderStudents(students);
//    });

//    handleCreateForm();
//    handleDeleteStudent();
// }

// start();

// //function lấy thông tin sinh viên
// function getStudent(callback) {
//    fetch(studentAPI)
//       .then(function(response) {
//          return response.json();
//       })
//       .then(callback);
// }

// function createStudent(data, callback) {
//    const option = {
//       method: 'POST',
//       headers: {
//          "Content-Type": "application/json",
//          // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(data)
//    };
//    fetch(studentAPI, option)
//       .then(function(response) {
//          response.json();
//       })
//       .then(callback);
// }

// function deleteStudent(id, callback) {
//    const option = {
//       method: 'DELETE',
//       headers: {
//          "Content-Type": "application/json",
//          // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//    };
//    fetch(studentAPI + '/' + id, option)
//       .then(function(response) {
//          response.json();
//       })
//       .then(callback);
// }
