const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two'); //show currency 

const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two'); //show money

const rateText=document.getElementById('rate');
const swap=document.getElementById('btn')  // show swap container

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);
amount_one.addEventListener('input',calculateMoney);
amount_two.addEventListener('input',calculateMoney);

function calculateMoney(){
    const Currencyone = currency_one.value;
    const Currencytwo = currency_two.value;
    let url = 'https://v6.exchangerate-api.com/v6/0805fce2314afc960677bcc6/latest/'+Currencyone;
    fetch(url).then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[Currencytwo]
        rateText.innerText='1'+Currencyone+' = '+rate+' '+Currencytwo;
        amount_two.value=(amount_one.value*rate).toFixed(2);
    })
}
swap.addEventListener('click',()=>{
    // USD => THB || THB => USD
    // TEMP => USD || THB => TEMP(USD)
    const temp = currency_one.value; //Keep first value
    currency_one.value=currency_two.value;
    currency_two.value=temp //swap first val to secon val
    calculateMoney()
})

calculateMoney()