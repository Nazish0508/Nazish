setInterval(()=>{
  d = new Date();
  hour = d.getHours();
  minute = d.getMinutes();
  second = d.getSeconds();
  hrotation = 30*hour + minute/2;
  mrotation = 6*minute;
  srotation = 6*second;

  hours.style.transform = `rotate(${hrotation}deg)`;
  minutes.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);