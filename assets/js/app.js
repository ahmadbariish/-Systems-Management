let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let title = document.getElementById('title');


function getTotal() {
    const priceValue = Number(price.value);
    const taxesValue = Number(taxes.value);
    const adsValue = Number(ads.value);
    const discountValue = Number(discount.value);

    if (!isNaN(priceValue) && priceValue != '') {
        const result = (priceValue + taxesValue + adsValue) - discountValue;
        total.innerHTML = result;
        total.style.background = 'green';
    } else {
        total.innerHTML = '';
        total.style.background = 'red'
    }
}

let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}

submit.onclick = () => {
    let newProd = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    dataPro.push(newProd);
    // Save Data LocalStorg.
    localStorage.setItem('product', JSON.stringify(dataPro));
    clearData();
}

// Clear Inputs.
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

// Read Data

function showData(){
    
}