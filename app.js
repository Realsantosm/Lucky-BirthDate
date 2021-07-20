const birthdate = document.querySelector('#birthdate');
const luckyNum = document.querySelector('#luckynumber');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
const tweet = document.querySelector('#tweet');
const policy = document.querySelector('#policy');
const policyCard = document.querySelector("#policy-card");

btn.addEventListener('click', function(){
    let date = birthdate.nodeValue;
    if(date === ''){
        alert('Please! Enter your Birth Date.');
    }else{
        let dateInt = parseInt(date.replaceAll('-', ''));
        let number = luckyNum.nodeValue;
        if(number === ''){
            alert('Please! Enter your lucky number.');
        }else{
            SumOfDigitsNDivisible(dateInt, number);

        }
    }
});


function SumOfDigitsNDivisible(date,number){
    let sum = 0;
    while (date > 0){
        let lastDigit = digit % 10;
        sum = sum + lastDigit;
        date = date / 10;
    }

    let sumOfDigits = parseInt(sum);

    if(sumOfDigits % number == 0){
        output.innerText = 'Congratulations, your Birth is a Lucky day!' ;
    } else{
        output.innerText = 'Sorry, your birthday is not a lucky day! ';
    }

}

reset.addEventListener('click', function(){
    birthdate.value = '';
    output.innerText = '';
    luckyNum.value = '';
});

tweet.addEventListener('click', function(){
    let message = output.textContent;
    if (message === ''){
        output.innerText = 'Please Enter a Birth Date!';
    } else {
        let twitterUrl = 'https://twitter.com/intent/tweet?text=${message}';
        window.open(twitterUrl, '_blank')
    }
});


policy.addEventListener('click', function(){
    policyCard.className = 'show';
    setTimeout(function(){
        policyCard.className = policyCard.className.replace('show', '');
    }, 3500);
})