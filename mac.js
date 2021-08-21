
  function priceAmount(product, cost){
    const normalCost = cost ;
    const totalCost = document.getElementById(product);
    totalCost.innerText = normalCost ;
    return totalCost.innerText ;
  
 } 
// Extar memory cost
 document.getElementById('gb8-memory').addEventListener('click', function(){
    var normalPrice = priceAmount( 'cost-memory', 0) ;
    //console.log(normalPrice )
    return normalPrice ;
   
}) ;
 document.getElementById('gb16-memory').addEventListener('click', function(){
  var extraPrice = priceAmount('cost-memory',180) ;
    //console.log(extraPrice) ;
    return extraPrice ;
 }) ;

// Extar storage cost
document.getElementById('ssd-gb256').addEventListener('click', function(){
  let normalStorage = priceAmount('storage-cost', 0) ;
  return normalStorage ;
 }) ;
 document.getElementById('ssd-gb512').addEventListener('click', function(){
  let extraStorage = priceAmount('storage-cost', 100) ;
  return extraStorage ;
 }) ;
 document.getElementById('ssd-1tb').addEventListener('click', function(){
  let extraStorage1tr = priceAmount('storage-cost', 180) ;
  return extraStorage1tr ;
 }) ;

 // Delivery Charge
 document.getElementById('normal-delivery').addEventListener('click', function(){
  let normalDelivery = priceAmount('delivery-cost', 0) ;
   return normalDelivery ;
 }) ;
 document.getElementById('extra-delivery').addEventListener('click', function(){
 let extraDelivery = priceAmount('delivery-cost', 20) ;
  return extraDelivery ;
 }) ;

  
    const totalAmount = document.getElementById('total-cost');
    let total = normalPrice + extraPrice + normalStorage + extraStorage + extraStorage1tr + normalDelivery + extraDelivery 
    totalAmount.innerText =  total
  
     

// Promo Code 
  document.getElementById('promo-code').addEventListener('click', function(){
  const inputCode = document.getElementById('input-promo-code');
  const promoCodeValue = inputCode.value ;
  if(promoCodeValue == 'stevekaku'){
    let discountValue = (totalAmount * 20) / 100 ;
    }
    
  document.getElementById('total').innerText = discountValue ; 
  inputCode.value = '' ;  
  }) ;

