const ListItems = [
    {
        id:1,
        name: 'Bánh ngọt 1',
        price: 20000,
        img: '../../img/BanhNgot1.jpg',
        link: 'BanhNgot/BanhNgot1.html'

    },
    {
        id:2,
        name: 'Bánh ngọt 2',
        price: 10000,
        img: '../../img/BanhNgot2.jpg',
        link: 'BanhNgot/BanhNgot2.html'
    },
    {
        id:3,
        name: 'Bánh ngọt 3',
        price: 15000,
        img: '../../img/BanhNgot3.jpg',
        link: 'BanhNgot/BanhNgot3.html'
    },
    {
        id:4,
        name: 'Bánh ngọt 4',
        price: 20000,
        img: '../../img/BanhNgot4.jpg',
        link: 'BanhNgot/BanhNgot4.html'
        
    },
]

let page = {
    pageNumber: 1,
    pageSize: 16,
}
//hàm hiển thị list dnah sách
function setListItem(list) {
    $('.ListProduct').html('');  //thiết lập class ListProduct về rỗng
    for (let i = 0; i < list.length; i++) {
        let item = `<div class="productItem col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="productItem__img">
            <a href="${list[i].link}">
                 <img class="img-fluid" src="${list[i].img}" alt="">
            </a>
            <div class="QuickView" onclick="showDataId(${list[i].id})">
                <p >Xem nhanh</p>
            </div>
        </div>
        <p>${list[i].name}</p>
                <span>${Intl.NumberFormat('en-US').format(list[i].price)} <sup>đ</sup></span>                  
        </div>    
        
        
        <div class="showProduct" id="showProduct" data-id="${list[i].id}">
        <div  class="blur"></div>
        <svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
            class="bi bi-x-lg" viewBox="0 0 16 16">
            <path
                d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
        <div class="row showProduct_info" >
            <div class="showProduct_info__img col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <img src="${list[i].img}" alt="${list[i].name}">
            </div>
            <div class="showProduct_info__content col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h3>${list[i].name}</h3>
                <div class="underlined"></div>
                <h4><small>${(list[i].price)}</small><sup>đ</sup></h4>
                <p>40ml Dark Rum</p>
                <p>40ml Malibu</p>
                <p>20ml of Lime juice</p>
                <p>40ml of Coconut milk</p>
                <p>Half of Pinapple</p>
                <p>Blender to mix everything up</p>
                <span>Còn hàng</span>
                <div class="row input d-flex">
                    <div class="quantity d-flex">
                    <button id="tru" class="tru-event" >-</button>
                    <div id="number" class="number-pro" data-number="1">1</div>
                    <button id="cong" class="cong-event">+</button>
                    </div>
                    
                    <button id="them" onclick="themvaogiohang(this)">Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
        </div>    
    `
        $('.ListProduct').append(item);
    }

}
setListItem(ListItems.slice(0, page.pageSize));

//Chuyển đổi trang sản phẩm
$('.pagination li').click(function () {
    $('.pagination li').removeClass('active');
    $(this).addClass('active');
    let pages = $(this).attr('page-number');
    page.pageNumber = eval(pages);
    let arr = ListItems.slice(page.pageNumber * page.pageSize - page.pageSize, page.pageSize * page.pageNumber);
    setListItem(arr);
});

// hiện showProduct theo id của nó
function showDataId(id){
    $('.showProduct[data-id="'+ id +'"]').show();
}

//click ra ngoài là ẩn showProduct
$(document).mouseup(function(e) 
{
    var container = $(".showProduct_info");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.showProduct').hide(); 
    }
});
