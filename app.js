const date = () => {
    let date_main = new Date("Jun, 04, 2024, 10:50:58");
    let current_date = new Date();
    let date_day = parseInt((date_main - current_date)/1000/60/60/24);
    let date_hour = parseInt((date_main - current_date)/1000/60/60) % 24;
    let date_min = parseInt((date_main - current_date)/1000/60) % 60;
    let date_sec = parseInt((date_main - current_date)/1000) % 60;

    document.getElementsByClassName('time')[0].innerHTML = `
            <span id="day">${date_day} <br> <h6>Days</h6></span>
            <h5>:</h5>
            <span id="day">${date_hour} <br> <h6>Hours</h6></span>
            <h5>:</h5>
            <span id="day">${date_min} <br> <h6>Minutes</h6></span>
            <h5>:</h5>
            <span id="day">${date_sec}<br> <h6>Seconds</h6></span>
    `
}

setInterval(date, 1000);


// For currency Converter

let coin_first = document.getElementById('coin_first');
let coin = document.getElementById('coin');
let btc = document.getElementById('btc');

coin.addEventListener('change', ()=> {
    let a = coin.value;
    coin_first.innerText = a.slice(0, 1);

    if(a === "Bitcoin"){
        btc.innerText = "BTC";
    }else if(a === "Ethereum"){
        btc.innerText = "ETH";
    }else if(a === "Tether"){
        btc.innerText = "USDT";
    }else{
        btc.innerText = "BNB";
    }
});
