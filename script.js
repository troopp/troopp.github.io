'use strict';

function alert_fn(msg, wait)
 {
     function alert_msg()
      {
          alert(msg);
      }
    function alert_wait()
     {
         setTimeout(alert_msg, wait);
     }
    if(wait<3000)
     {
         alert_msg();
     }
    else
     {
         alert_wait();
     }
 }

