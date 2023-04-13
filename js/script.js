const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');


const getTime = () => {
    const date = new Date();
    
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
    
    
}
setInterval(()=>{
    
    const {hours} = getTime();
    const {minutes} = getTime();
    const {seconds} = getTime();
    hourHand.style.transform = `translate(0,-50%) rotate(${hours*30}deg)`
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    secondHand.style.transform = `translate(0,-50%) rotate(${seconds * 6}deg)`


},1000)
