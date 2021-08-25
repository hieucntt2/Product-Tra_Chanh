const Name = document.getElementById('name');
const phone = document.getElementById('phoneNumber');
const date = document.getElementById('date');
const email = document.getElementById('email');
const peopleNumber = document.getElementById('peopleNumber');
const time = document.getElementById('time');


const formMesage = document.getElementById('form-message');
const btnn = document.getElementById('btnn');

const phone_regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

btnn.addEventListener('click', function(e){
    e.preventDefault();
    if (Name.value.trim()) {
        setSuccesss(Name);
    } else {
        setErrorr(Name, 'Mời bạn nhập tên !');
    }
    if (phone.value === '') {
        setErrorr(phone, 'Mời bạn nhập số điện thoại !');
    } else {
        setSuccesss(phone);
    } 
    if (date.value === '') {
        setErrorr(date, 'Mời bạn chọn ngày !');
    } else {
        setSuccesss(date);
    }
    if (email.value === '') {
        setErrorr(email, 'Mời bạn nhập email !');
    } else {
        setSuccesss(email);
    }
    if (peopleNumber.value === '0') {
        setErrorr(peopleNumber, 'Mời bạn chọn số người !');
    } else {
        setSuccesss(peopleNumber);
    }
    if (time.value === '') {
        setErrorr(time, 'Mời bạn chọn thời gian !');
    } else {
        setSuccesss(time);
    }
})

Name.onkeydown = function () {
    if (Name.value.trim()) {
        setSuccesss(Name);
    } else {
        setErrorr(Name, 'Mời bạn nhập tên !');
    }
}
phone.onkeydown = function () {
    if (phone.value === '') {
        setErrorr(phone, 'Mời bạn nhập số điện thoại !');
    } else {
        setSuccesss(phone);
    }
}
date.onmouseout = function () {
    if (date.value === '') {
        setErrorr(date, 'Mời bạn chọn ngày !');
    } else {
        setSuccesss(date);
    }
}
email.onkeydown = function () {
    if (email.value === '') {
        setErrorr(email, 'Mời bạn nhập email !');
    } else {
        setSuccesss(email);
    }
}
peopleNumber.onmouseout = function () {
    if (peopleNumber.value === '0') {
        setErrorr(peopleNumber, 'Mời bạn chọn số người !');
    } else {
        setSuccesss(peopleNumber);
    }
}
time.onmouseout = function () {
    if (time.value === '') {
        setErrorr(time, 'Mời bạn chọn thời gian !');
    } else {
        setSuccesss(time);
    }

}

function setErrorr(input, message) {
    const form = input.parentElement;
    const small = form.querySelector('small');
    small.innerText = message;
    form.className = 'form-message error';
}

function setSuccesss(input) {
    const form = input.parentElement;
    form.className = 'form-message success';
}

