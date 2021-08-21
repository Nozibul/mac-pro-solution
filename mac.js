
  function priceAmount(product, cost){
    const normalCost = cost
    const totalCost = document.getElementById(product);
    totalCost.innerText = normalCost ;
  
 } 
// Extar memory cost
document.getElementById('gb8-memory').addEventListener('click', function(){
//     const memoryCost = 0;  
//    const totalMemoryCost = document.getElementById('cost-memory');
//    totalMemoryCost.innerText = memoryCost ; 
   priceAmount( 'cost-memory', 0) ;
   totalPrice(cost) ;
}) ;
 document.getElementById('gb16-memory').addEventListener('click', function(){
 
    // const totalMemoryCost = document.getElementById('cost-memory');
    // totalMemoryCost.innerText = memoryCost ;

    priceAmount('cost-memory',180) ;
 }) ;


// Extar storage cost

document.getElementById('ssd-gb256').addEventListener('click', function(){
    // const ssdGb256 = 0;
    // const totalSsdGb256 = document.getElementById('storage-cost');
    // totalSsdGb256.innerText = ssdGb256 ;
    priceAmount('storage-cost', 0) ;

 }) ;
 document.getElementById('ssd-gb512').addEventListener('click', function(){
    // const ssdGb512 = 100;
    // const totalSsdGb512 = document.getElementById('storage-cost');
    // totalSsdGb512.innerText =ssdGb512 ;
    priceAmount('storage-cost', 100) ;

 }) ;
 document.getElementById('ssd-1tb').addEventListener('click', function(){
    // const ssd1tb = 180;
    // const totalSsd1tb = document.getElementById('storage-cost');
    // totalSsd1tb.innerText = ssd1tb ;
    priceAmount('storage-cost', 180) ;

 }) ;


 // Delivery Charge
 document.getElementById('normal-delivery').addEventListener('click', function(){
    // const primeDeliveryCost = 0;
    // const totalprimeDeliveryCost = document.getElementById('delivery-cost');
    // totalprimeDeliveryCost.innerText = primeDeliveryCost;
    priceAmount('delivery-cost', 0) ;

 }) ;
 document.getElementById('extra-delivery').addEventListener('click', function(){
    // const extraDeliveryCost = 20;
    // const totalextraDeliveryCost  = document.getElementById('delivery-cost');
    // totalextraDeliveryCost .innerText = extraDeliveryCost  ;
    priceAmount('delivery-cost', 20) ;

 }) ;

 function totalPrice(){
       price = cost + 1299 ;
       const totalAmount = document.getElementById('total-cost');
       totalAmount.innerText = price ;
      
 }

