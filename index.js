function updateTimer() {
  future  = Date.parse("January 4, 2021 21:00:00");
  now     = new Date();
  diff    = future - now;
  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );
  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;
  if(diff<0){
   d=0;
   h=0;
   m=0;
   s=0; 
  }
  if (d < 10) d = "0" + d;
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + ':' + h +  ':' + m + ':' + s + '</div>' ;
}
setInterval('updateTimer()', 1000 );
