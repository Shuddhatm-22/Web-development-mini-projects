setInterval(setclock, 1000);

const hourhand=document.querySelector('[data-hour-hand]')
const minutehand=document.querySelector('[data-minute-hand]')
const secondhand=document.querySelector('[data-second-hand]')

function setclock(){

    const curdate=new Date();
    const secondratio=curdate.getSeconds()/60;
    const minutesratio=(secondratio+  curdate.getMinutes())/60;
    const hoursatio=(minutesratio+ curdate.getHours())/12;
    setrotation(secondhand,secondratio);
    setrotation(minutehand,minutesratio);
    setrotation(hourhand,hoursatio);



}

function setrotation(element,rotationratio){

    element.style.setProperty('--rotation',rotationratio*360);
}

setclock()