let output=document.getElementById('output');
// console.log(output);
output.style.visibility='hidden';
let currencyInput=document.getElementById('currencyInput');
// console.log(currencyInput);
currencyInput.addEventListener('input', function (e) {
    // console.log(e.target.value);
    let inputValue=e.target.value
    if(inputValue>0){
        output.style.visibility='visible';
        let rubl=document.querySelector('#rublOutput');
        let dollar=document.querySelector('#dollarOutput');
        let euro=document.querySelector('#euroOutput');
        let dirham=document.querySelector('#dirhamOutput');
        rubl.innerHTML=Math.floor((inputValue/143.95)*100)/100;
        dollar.innerHTML=Math.floor((inputValue/10745.40)*100)/100;
        euro.innerHTML=Math.floor((inputValue/12043.44)*100)/100;
        dirham.innerHTML=Math.floor((inputValue/2929.92)*100)/100;
    }else{
        alert(' 0 va manfiy bo\'lmagan son kiriting')
        let current=document.getElementById('currencyInput');
        current.value='';
        output.style.visibility='hidden'
    }
})