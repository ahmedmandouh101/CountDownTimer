let countDownDate = new Date("Dec 31 , 2023 23:59:59").getTime();



let counter = setInterval( ()=> {

    let DateNow = new Date().getTime();

    let DateDiff = countDownDate - DateNow ;

    let days = Math.floor(DateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((DateDiff % (1000 * 60 * 60)) / (1000 * 60 * 60)) ;
    let minutes = Math.floor((DateDiff % ( 1000 * 60 * 60)) / ( 1000 * 60 ));
    let seconds = Math.floor((DateDiff % ( 1000 * 60 )) /  1000 );

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(DateDiff < 0){
        clearInterval(counter);
    }

    
}, 1000)








console.log(countDownDate);