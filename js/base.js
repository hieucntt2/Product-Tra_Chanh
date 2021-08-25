/* __________________LOGIN__________________________ */
function openLogin() {
  document.getElementById("login").style.display = "block";
}
function closeLogin() {
  document.getElementById("login").style.display = "none";
}
/* __________________MENU MOBILE__________________________ */
function openMenu() {
  document.getElementById('menu-mobile').style.display = 'block';
}
function closeMenu() {
  document.getElementById('menu-mobile').style.display = 'none';
}
/* __________________Giỏ Hàng__________________________ */
function openCart() {
  document.getElementById('bag').style.display = 'block';
}
function closeCart() {
  document.getElementById('bag').style.display = 'none';
}
/* __________________scroll__________________________ */
const toTop = document.querySelector("#ScrollTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// validate form
const form = document.getElementById('form');
const btn = document.getElementById('btn');
const userName = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('click', function () {
  validate();
});

function validate() {
  if (userName.value.trim() === '') {
    setError(userName, 'Bạn phải nhập tên đăng nhập !');
  } else {
    setSuccess(userName);
  }

  if (password.value.trim() === '') {
    setError(password, 'Bạn phải nhập mật khẩu !');
  } else {
    setSuccess(password);
  }
}

function setError(input, message) {
  const form = input.parentElement;
  const small = form.querySelector('small');
  small.innerText = message;
  form.className = 'form error';
}
function setSuccess(input) {
  const form = input.parentElement;
  form.className = 'form success';
}

// TĂNG SỐ LƯỢNG GIỎ HÀNG

$(document).ready(function () {
  $('.tru-event').click(function () {
    let res = $(this).siblings('.number-pro').text();
    if (res > 1) {
      res = parseInt(res) - 1;
    };
    $(this).siblings('.number-pro').text(res);

    $('#update').addClass('active');

  });
  $('.cong-event').click(function () {
    let res = $(this).siblings('.number-pro').text();
    res = parseInt(res) + 1;
    $(this).siblings('.number-pro').text(res);

    $('#update').addClass('active');

  });
})
//        GIỎ HÀNG
var giohang = new Array();

var str = sessionStorage.getItem('mycart');
if (str) {
  giohang = JSON.parse(str);
}
countProduct();
showPrice();


function themvaogiohang(x) {  // Trang thực đơn
  var productItem = x.parentElement.parentElement.parentElement;
  var img = productItem.children[0].children[0].src;
  var name = productItem.children[1].children[0].innerText;
  var price = parseInt(productItem.children[1].children[2].children[0].innerText);
  var money = Intl.NumberFormat('en-US').format(price);

  var soluong = parseInt(productItem.children[1].children[10].children[0].children[1].innerText);
  var product = new Array(img, name, price, soluong, money);

  var kt = 0;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][1] == name) {
      kt = 1;
      soluong += parseInt(giohang[i][3]);
      giohang[i][3] = soluong;
    }
  }
  if (kt == 0) {
    giohang.push(product);
  }
  countProduct();
  showPrice();
  //Lưu giỏ hàng lên sessionStorage
  sessionStorage.setItem('mycart', JSON.stringify(giohang));
  alert('Thêm ' + name + ' thành công !');
  $('.showProduct').hide();

}

function themvaogiohanghang(x) {  // Trang thực đơn
  var productItem = x.parentElement.parentElement.parentElement;
  var img = productItem.children[0].children[0].src;
  var name = productItem.children[1].children[1].innerText;
  var price = parseInt(productItem.children[1].children[3].children[0].innerText);
  var money = Intl.NumberFormat('en-US').format(price);

  var soluong = parseInt(productItem.children[1].children[11].children[0].children[1].innerText);
  var product = new Array(img, name, price, soluong, money);

  var kt = 0;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][1] == name) {
      kt = 1;
      soluong += parseInt(giohang[i][3]);
      giohang[i][3] = soluong;
    }
  }
  if (kt == 0) {
    giohang.push(product);
  }
  countProduct();
  showPrice();
  //Lưu giỏ hàng lên sessionStorage
  sessionStorage.setItem('mycart', JSON.stringify(giohang));
  alert('Thêm ' + name + ' thành công !');
  $('.showProduct').hide();

}
function countProduct() {
  document.getElementById("countProduct").innerHTML = giohang.length;
}
function showPrice() {
  var money = 0;
  for (let i = 0; i < giohang.length; i++) {
    money += parseInt(giohang[i][2] * giohang[i][3]);
  }
  document.getElementById("price").innerHTML = Intl.NumberFormat('en-US').format(money);

}
function sumPrice() {
  var money = 0;
  for (let i = 0; i < giohang.length; i++) {
    money += parseInt(giohang[i][2] * giohang[i][3]);
  }
  document.getElementById('tongtien').innerHTML = Intl.NumberFormat('en-US').format(money);
}


function showCartProduct() {
  var gh = sessionStorage.getItem('mycart');
  var giohang = JSON.parse(gh);
  var item = "";
  var tongtien = 0;
  if (giohang.length != 0) {
    $('.cartProduct').html('');
  }
  for (let i = 0; i < giohang.length; i++) {
    var thanhtien = parseInt(giohang[i][2] * giohang[i][3]);
    tongtien += thanhtien;
    item = ` <div class="cartItem">
              <a href="#">
                <div class="catItem_img">
                  <img src="${giohang[i][0]}" alt="" style="width: 100%;">
                </div>
                  <div class="cartItem_info">
                      <p>${giohang[i][1]}</p>
                      <p><span>${giohang[i][3]}</span> x <small>${giohang[i][4]}</small><sup>đ</sup></p>
                  </div>
              </a>
              <svg onclick="deleteProduct(this)"  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                  class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
          </div>
              `
    $('.cartProduct').append(item);
  }


  // let money = Intl.NumberFormat('en-US').format(tongtien);
  // format chuyển đổi tiền
  $('#sum-money').text(Intl.NumberFormat('en-US').format(tongtien));
}

function deleteProduct(x) {
  debugger;
  var div = x.parentElement;
  div.remove();
  //xóa sản phẩm trong mảng
  var tensp = div.children[0].children[1].children[0].innerText;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][1] == tensp) {
      giohang.splice(i, 1); // xóa 1 phần tử ở vị trí i
    }
  }
  //sau khi xóa xong thì set lại giỏ hàng trên session
  sessionStorage.setItem('mycart', JSON.stringify(giohang));

  //cập nhật lại giỏ hàng và số lượng
  showCartProduct();
  countProduct();
  showPrice();
  sumPrice();
}

// show giỏ hàng trang giỏ hàng
function showgiohang() {
  var gh = sessionStorage.getItem('mycart');
  var giohang = JSON.parse(gh);
  var tongtien = 0;
  for (let i = 0; i < giohang.length; i++) {
    var thanhtien = parseInt(giohang[i][2] * giohang[i][3]);
    tongtien += thanhtien;
    let item = `<tr>
                    <td><svg onclick="xoaSP_giohang(this)" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg></td>
                    <td><img src="${giohang[i][0]}" alt="" style="width: 100px;"></td>
                    <td id="name">${giohang[i][1]}</td>
                    <td><small>${Intl.NumberFormat('en-US').format(giohang[i][2])}</small><sup> đ</sup></td>
                    <td>
                        <div class="quantity d-flex">
                        <button id="tru" class="tru-event" >-</button>
                        <div id="number" class="number-pro" data-number="${i}">${giohang[i][3]}</div>
                        <button id="cong" class="cong-event">+</button>
                        </div>
                    </td>
                    <td><small id="moneyCart" data-number="${i}">${Intl.NumberFormat('en-US').format(thanhtien)}</small><sup> đ</sup></td>
                </tr>`
    $('#myProduct_item').append(item)

    $('#tongtien').text(Intl.NumberFormat('en-US').format(tongtien));

  }
}

function xoaSP_giohang(x) {
  var tr = x.parentElement.parentElement;
  tr.remove();

  var tensp = tr.children[2].innerText;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][1] == tensp) {
      giohang.splice(i, 1); // xóa 1 phần tử ở vị trí i
    }
  }

  //sau khi xóa xong thì set lại giỏ hàng trên session
  sessionStorage.setItem('mycart', JSON.stringify(giohang));

  //cập nhật lại giỏ hàng và số lượng
  showCartProduct();
  countProduct();
  showPrice();
  sumPrice();
}
function add() {

}

$(document).ready(function () {

  if (giohang.length == 0) {
    $('.title').show();
    $('.producttt').hide();
    $('.Payment').hide();
  }
  if (giohang.length != 0) {
    $('.title').hide();
    $('.producttt').show();
    $('.Payment').show();
  }
});


//tính tổng tiên trang thnah toán
function payPrice() {

  var money = 0;
  for (let i = 0; i < giohang.length; i++) {
    money += parseInt(giohang[i][2] * giohang[i][3]);
    let item = `<div id="PTP">
              <p>${giohang[i][1]} <span>x ${giohang[i][3]}</span></p>
                <p><small>${giohang[i][4]}</small> <sup>đ</sup></p> 
                </div>`
    $('.paymentTable_product').append(item);
  }
  document.getElementById('payPrice').innerHTML = Intl.NumberFormat('en-US').format(money);
}
payPrice();

function updateCart() {
  var gh = sessionStorage.getItem('mycart');
  var giohang = JSON.parse(gh);
  var tongtien = 0;
  for (let i = 0; i < giohang.length; i++) {
    var x = parseInt($('.number-pro[data-number="' + i + '"]').text());
    console.log(x);
    giohang[i][3] = x;
    console.log(giohang[i][3]);
    var tt = giohang[i][2] * giohang[i][3];
    console.log(tt);
    tongtien += tt;
    $('#moneyCart[data-number="'+i+'"]').text(Intl.NumberFormat('en-US').format(tt));

  }


  $('#tongtien').text(Intl.NumberFormat('en-US').format(tongtien));
  document.getElementById("price").innerHTML = Intl.NumberFormat('en-US').format(tongtien);
  sessionStorage.setItem('mycart', JSON.stringify(giohang));

    $('#update').removeClass('active');

}

$('input[type="radio"]').not(':checked').prop("checked", true);









