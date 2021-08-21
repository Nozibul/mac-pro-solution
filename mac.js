
  function priceAmount(product, cost){
    const normalCost = cost
    const totalCost = document.getElementById(product);
    totalCost.innerText = normalCost ;
  
 } 
// Extar memory cost
document.getElementById('gb8-memory').addEventListener('click', function(){
   priceAmount( 'cost-memory', 0) ;
   totalPrice(cost) ;
}) ;
 document.getElementById('gb16-memory').addEventListener('click', function(){

    priceAmount('cost-memory',180) ;
 }) ;

// Extar storage cost
document.getElementById('ssd-gb256').addEventListener('click', function(){
    priceAmount('storage-cost', 0) ;

 }) ;
 document.getElementById('ssd-gb512').addEventListener('click', function(){
    priceAmount('storage-cost', 100) ;

 }) ;
 document.getElementById('ssd-1tb').addEventListener('click', function(){
    priceAmount('storage-cost', 180) ;

 }) ;

 // Delivery Charge
 document.getElementById('normal-delivery').addEventListener('click', function(){
    priceAmount('delivery-cost', 0) ;

 }) ;
 document.getElementById('extra-delivery').addEventListener('click', function(){
    priceAmount('delivery-cost', 20) ;

 }) ;

 function totalPrice(){
       price = cost + 1299 ;
       const totalAmount = document.getElementById('total-cost');
       totalAmount.innerText = price ;
      
 }

