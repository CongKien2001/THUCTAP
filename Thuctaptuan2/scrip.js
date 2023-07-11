//ten khoa hoc
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

//gia tien

let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");



//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");


//Text verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{0,}$/;
  return regex.test(text);
};

//gia tien
const phoneVerify = (number) => {
  const regex = /[a-z0-9]/;
  return regex.test(number);
};

//gg meet
const emailVerify = (input) => {
  const regex = /^https:\/\/meet.google.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/;
  return regex.test(input);
};

//For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    //input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    //input has some content
    emptyErrorReference.classList.add("hide");
  }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

//ten khoa hoc
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    //If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    //for false
    errorUpdate(firstNameInput, firstNameError);
    //empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});


//gia tien
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
     errorUpdate(phoneInput, phoneError);
    // emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});

function formatCurrency(input) {
  var value = input.value.replace(/\D/g, "");
  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  input.value = value + " (VNĐ)";
}

// $('input.CurrencyInput').on('blur', function() {
//   const value = this.value.replace(/,/g, '');
//   this.value = parseFloat(value).toLocaleString('it-IT', {style : 'currency', currency : '(VND)'
//   });
// });

//link gg
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});
////check min max
        function checkMinMax() {
          var minInput = document.getElementById("minInput");
          var maxInput = document.getElementById("maxInput");
          var error = document.getElementById("error");
        
          if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
            error.innerHTML = "Giá trị Min không được lớn hơn hoặc bằng giá trị Max";
            maxInput.setCustomValidity("Giá trị Min không được lớn hơn hoặc bằng giá trị Max");
          } else {
            error.innerHTML = "";
            maxInput.setCustomValidity("");
          }
        }
//0 nho hon 0
var numberInput = document.getElementById('minInput');
var errorMessage = document.getElementById('error-message');

numberInput.addEventListener('input', function() {
  if (this.value < 0) {
    this.value = 0;
    errorMessage.innerHTML = 'Min không được nhỏ hơn 0';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.innerHTML = '';
    errorMessage.style.display = 'none';
  }
});

var numberInput = document.getElementById('maxInput');
var errorMessage = document.getElementById('error-message');

numberInput.addEventListener('input', function() {
  if (this.value < 0) {
    this.value = 0;
    errorMessage.innerHTML = 'Max không được nhỏ hơn 0';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.innerHTML = '';
    errorMessage.style.display = 'none';
  }
});
        
                
//mo ta khoa hoc
var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 200;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength >= limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
});

//hinh anh
let uploadButton = document.getElementById("exampleFormControlFile1");
let chosenImage = document.getElementById("chosen-image");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
}
var inputFile = document.getElementById("exampleFormControlFile1");
removeFun=()=>{
  chosenImage.src="/images/upload-img.jpg";
  inputFile.value = "";
}
//xoay icon
// const arrowFlip = () => {
//   let icon = document.getElementById("icons");
//   let open = false;

//   icon.addEventListener("click", function() {
    
//     if (open) {
//       icon.style.transform = "rotate(180deg)";
//       icon.style.color = "#358cf0";
//     } else {
//       icon.style.transform = "rotate(0deg)";
//       icon.style.color = "black";
      
//     }

//     open = !open;
//   });
// };
// arrowFlip();
const myElementtt = document.getElementById('icons');
let counterrr = 0;

myElementtt.addEventListener('click', () => {
  if (counterrr === 0) {
    myElementtt.style.transform = 'rotate(180deg)';
    myElementtt.style.color = '#358cf0';
    counterrr = 1;
  } else {
    myElementtt.style.transform = 'rotate(0deg)';
    myElementtt.style.color = 'black';
    counterrr = 0;
  }
});

// xoay icon 2
const myElement = document.getElementById('iconss');
let counter = 0;

myElement.addEventListener('click', () => {
  if (counter === 0) {
    myElement.style.transform = 'rotate(180deg)';
    myElement.style.color = '#358cf0';
    counter = 1;
  } else {
    myElement.style.transform = 'rotate(0deg)';
    myElement.style.color = 'black';
    counter = 0;
  }
});

const myElementt = document.getElementById('iconsss');
let counterr = 0;

myElementt.addEventListener('click', () => {
  if (counterr === 0) {
    myElementt.style.transform = 'rotate(180deg)';
    myElementt.style.color = '#358cf0';
    counterr = 1;
  } else {
    myElementt.style.transform = 'rotate(0deg)';
    myElementt.style.color = 'black';
    counterr = 0;
  }
});
//them sua xoa khoa hoc
const form = document.getElementById('my-form');
const table = document.getElementById('my-table').getElementsByTagName('tbody')[0];
let data = [];

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  

  
//   const timeStart = document.getElementById('time-start').value;
//   const timeEnd = document.getElementById('time-end').value;
//   const date = document.getElementById('date').value;
//   const slot = document.getElementById('slot').value;

//   const weekdays = [];
//   const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
//   weekdayCheckboxes.forEach((checkbox) => {
//   if (checkbox.checked) {
//   weekdays.push(checkbox.value);
//   }
//   });
  
//   const rowData = {

//   date,
//   timeStart,
//   timeEnd,
//   slot,
//   weekdays,
//   };
  
//   data.push(rowData);
//   renderTable();
//   form.reset();
//   });
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const timeStart = document.getElementById('time-start').value;
  const timeEnd = document.getElementById('time-end').value;
  const date = document.getElementById('date').value;
  const slot = document.getElementById('slot').value;
  const weekdays = [];
  const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
  weekdayCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      weekdays.push(checkbox.value);
    }
  });

  const rowData = {
    date,
    timeStart,
    timeEnd,
    slot,
    weekdays,
  };

  // Check for duplicates
    const isDuplicate = data.some((row) => {
    const sameWeekday = row.weekdays.some((weekday) => rowData.weekdays.includes(weekday));
    const sameTime = rowData.timeStart === row.timeStart;   
    const sameDate = rowData.date === date;
    return sameWeekday && sameTime && sameDate;
  });

  if (isDuplicate) {
    alert('Dữ liệu bị trùng lặp. Vui lòng nhập lại!');
    return;
  }

  data.push(rowData);
  renderTable();
  form.reset();
});  

////////////////////

  function renderTable() {
  table.innerHTML = '';
  data.forEach((rowData, index) => {
  const row = table.insertRow();

  row.insertCell().innerHTML = rowData.date;
  row.insertCell().innerHTML = rowData.timeStart;
  row.insertCell().innerHTML = rowData.timeEnd;
  row.insertCell().innerHTML = rowData.slot;
  row.insertCell().innerHTML = rowData.weekdays.join(', ');
  const editButton = document.createElement('button-edit');
editButton.innerHTML = 'Sửa';
editButton.addEventListener('click', () => {
  editRow(index);
});

const deleteButton = document.createElement('button-delete');
deleteButton.innerHTML = 'Xóa';
deleteButton.addEventListener('click', () => {
  deleteRow(index);
});

const actionCell = row.insertCell();
actionCell.appendChild(editButton);
actionCell.appendChild(deleteButton);
});
}

function editRow(index) {
const rowData = data[index];
document.getElementById('date').value = rowData.date;
document.getElementById('time-start').value = rowData.timeStart;
document.getElementById('time-end').value = rowData.timeEnd;
document.getElementById('slot').value = rowData.slot;


const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
weekdayCheckboxes.forEach((checkbox) => {
checkbox.checked = rowData.weekdays.includes(checkbox.value);
});

data.splice(index, 1);
renderTable();
}

function deleteRow(index) {
data.splice(index, 1);
renderTable();
}
//gán ft
var inputElement = document.getElementById("first-name-input"); // Lấy thẻ input theo id
var h3Element = document.getElementById("h3-tag"); 

inputElement.addEventListener("input", function() { 
  h3Element.innerText = inputElement.value; 
});
//thoi gian 

var timePicker = document.getElementById("time-start");

var errorMessage = document.getElementById("error-messages");

function validateTimeInput() {
  var timeValue = timePicker.value;  
  var timeObject = new Date("2023-04-25T" + timeValue);
  
  if (timeObject.getHours() < 7 || timeObject.getHours() >= 19) {
    errorMessage.innerHTML = "Khung giờ cho phép là từ 7h sáng đến 7h tối.";
    timePicker.value = "";
  } else {
    errorMessage.innerHTML = "";
  }
}
timePicker.onchange = validateTimeInput;
//


 // lon hon 2 h
 var startTimeInput = document.getElementById("time-start");
  var endTimeInput = document.getElementById("time-end");
  var errorMessageDiv = document.getElementById("error-messages");

  function checkEndTime() {
    var startTime = new Date("2000-01-01T" + startTimeInput.value + ":00");
    var endTime = new Date("2000-01-01T" + endTimeInput.value + ":00");
    var timeDiff = endTime.getTime() - startTime.getTime();
    var diffHours = timeDiff / (1000 * 60 * 60);

    if (diffHours < 2) {
      errorMessageDiv.textContent = "Thời gian kết thúc phải lớn hơn thời gian bắt đầu ít nhất 2 giờ đồng hồ!";
    } else {
      errorMessageDiv.textContent = "";
    }
  }

  startTimeInput.addEventListener("input", checkEndTime);
  endTimeInput.addEventListener("input", checkEndTime);
  //date
  var dateInput = document.getElementById("date");

  function checkDateInput() {
    var inputDate = new Date(dateInput.value);
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() ); // cong 1 ngay

    if (inputDate <= todayDate) {
      alert("Ngày phải lớn hơn ngày hiện tại một ngày!");
      dateInput.value = todayDate.toISOString().slice(0, 10);
    }
  }

  dateInput.addEventListener("change", checkDateInput);
  // hahahahaádasd
  const tagContainer = document.querySelector('.tag-container');
  const tagInput = document.querySelector('.tag-input');
  
  let tags = [];
  
  function createTag(label) {
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');
    const span = document.createElement('span');
    span.innerHTML = label;
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'fa fa-times');
    closeBtn.setAttribute('data-item', label);
    div.appendChild(span);
    div.appendChild(closeBtn);
    return div;
  }
  
  function reset() {
    document.querySelectorAll('.tag').forEach(function(tag) {
      tag.parentElement.removeChild(tag);
    });
  }
  
  function addTags() {
    reset();
    tags.slice().reverse().forEach(function(tag) {
      const input = createTag(tag);
      tagContainer.prepend(input);
    });
  }
  
  tagInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' && tagInput.value.trim() !== '') {
      tags.push(tagInput.value.trim());
      addTags();     
      tagInput.value = '';
    }
  });

  tagInput.addEventListener('change', function() {
      if (tagInput.value.trim() !== '') {
        tags.push(tagInput.value.trim());
        addTags();     
        tagInput.value = '';
      }
  });


  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'I') {
      const tagLabel = e.target.getAttribute('data-item');
      const index = tags.indexOf(tagLabel);
      tags = [...tags.slice(0, index), ...tags.slice(index+1)];
      addTags();
    }
  });
  