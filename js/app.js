
const totalPriceWithDiscount=document.getElementById('total-price-with-discount');
function updateDevice (device,IsUpdate ){
    const deviceCostIput = document.getElementById(device);
      
     if(IsUpdate=='extra-plus' ){
        deviceCostIput.innerText= 180;
     }
     else if(IsUpdate == 'extra'){
        deviceCostIput.innerText= 100;
     }
     else if(IsUpdate == 'taratari-dao'){
        deviceCostIput.innerText= 20;
     }
     else{
        deviceCostIput.innerText= 0;
     }
      calculation();
     
  

}

// memory

 document.getElementById('button-8gb').addEventListener('click',function(){

    updateDevice ('extra-memory-cost',false)
    
    
 })
 document.getElementById('button-16gb').addEventListener('click',function(){

    updateDevice ('extra-memory-cost', 'extra-plus')
    
    
 })
//  ssd
 document.getElementById('button-ssd256').addEventListener('click',function(){

    updateDevice ('extra-storage-cost', false)
    
    
 })
 document.getElementById('button-ssd512').addEventListener('click',function(){

    updateDevice ('extra-storage-cost', 'extra')
    
    
 })
 document.getElementById('button-ssd1TB').addEventListener('click',function(){

    updateDevice ('extra-storage-cost', 'extra-plus')
    
    
 })
//  delivery
document.getElementById('button-free-delivery').addEventListener('click',function(){

    updateDevice ('daivery-cost', false)
    
    
 })
 document.getElementById('delivery-paid-delivery').addEventListener('click',function(){

    updateDevice ('daivery-cost', 'taratari-dao')
    
    
 })
//  calculation



 function calculation(){
    const totalPrice =document.getElementById('total-price');
     const bestPriceText = document.getElementById('best-price').innerText;
     const extraMemoryCostText= document.getElementById('extra-memory-cost').innerText;
 const extraStorageCostText= document.getElementById('extra-storage-cost').innerText;

 const deliverCostText = document.getElementById('daivery-cost').innerText;
// // value
    const bestPrice = parseFloat(bestPriceText) ;
     const extraMemoryCost= parseFloat(extraMemoryCostText);
     const extraStorageCost = parseFloat(extraStorageCostText);
     const deliverCost= parseFloat(deliverCostText);

     const UpdateTotalPrice= bestPrice + extraMemoryCost + extraStorageCost + deliverCost;
     totalPrice.innerText = UpdateTotalPrice;

     

   totalPriceWithDiscount.innerText =totalPrice.innerText;
 }
 

//  calculation with cupon code

function getWithCupon(){
    const cuponId=document.getElementById('cupon-input');
   const cuponInputText= cuponId.value;
   const totalPriceText =document.getElementById('total-price').innerText;
   
//    value
   const totalPrice= parseFloat(totalPriceText);
   

    if(cuponInputText== 'stevekaku'){

        totalPriceWithDiscount.innerText = totalPrice - totalPrice*0.2;

    }
    else{
      totalPriceWithDiscount.innerText=totalPrice;
      alert('hey! give a valid cupon if you want to get 20 percent discount')
    }
    cuponId.value='';
   

   

}




document.getElementById('cupon-button').addEventListener('click',function(){

    getWithCupon()
})
