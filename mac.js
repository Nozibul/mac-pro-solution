
const bestPrice = document.getElementById('best-price');
const costMemory = document.getElementById('cost-memory');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const cost = document.getElementById('total-cost');
const finalTotal = document.getElementById('all-total');

// All cost function
function allTotalPrice() {
    cost.innerText = parseFloat(bestPrice.innerText) + parseFloat(costMemory.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    finalTotal.innerText = cost.innerText;
};

// total cost function
function totalCost (product, cost){
    product.innerText = cost ;
    allTotalPrice() ;
};

// Add Even handler
document.getElementById('gb8-memory').addEventListener('click', function(){
    totalCost(costMemory, 0);  
});
document.getElementById('gb16-memory').addEventListener('click', function(){
    totalCost(costMemory, 180);  
});
document.getElementById('ssd-gb256').addEventListener('click', function(){
    totalCost(storageCost, 0);  
});
document.getElementById('ssd-gb512').addEventListener('click', function(){
    totalCost(storageCost, 100);  
});
document.getElementById('ssd-1tb').addEventListener('click', function(){
    totalCost(storageCost, 180);  
});
document.getElementById('normal-delivery').addEventListener('click', function(){
    totalCost(deliveryCost, 0);  
});
document.getElementById('extra-delivery').addEventListener('click', function(){
    totalCost(deliveryCost, 20);  
});


// Promo code
const promoInputCode = document.getElementById('input-promo-code');
const promoCode = document.getElementById('promo-code') ;
promoCode.addEventListener('click', function(){
    if(promoInputCode.value == 'stevekaku'){
        finalTotal.innerText = cost.innerText -
         (cost.innerText * .20);
         promoInputCode.value ='' ;
    }
});
















 

