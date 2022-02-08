        // this interval for set interval for stopwatch
        var interval 
        // the time var is important and i store the time in it
        var time=0
        // this function for start the stopwatch and change the timer_box
        function uptimer() {
            time++
            //this for milisecond
            if (time%99<10) {
                document.getElementById("milisecond").innerText="0"+time%99
            }
            else
                document.getElementById("milisecond").innerText=time%99
            //this for second
            if(time%100==0 & (time/100)%60<10){
                document.getElementById("second").innerText="0"+parseInt((time/100)%60);
            }
            else if(time%100==0){
                document.getElementById("second").innerText=parseInt((time/100)%60)
            }
            //this for minute
            if(time%6000==0 & (time/6000)%60<10){
                document.getElementById("min").innerText="0"+parseInt((time/6000)%60)
            }
            else if(time%6000==0){
                document.getElementById("min").innerText=parseInt((time/6000)%60)
            }
            // this for hours
            if(time%360000==0){
                document.getElementById("hours").innerText=parseInt(time/360000)
            }

            
        }
        /* this function for check the input is to put valid value in input
         when make change in the input depend on negative value or grater than the max */
        function check_input(val ,num) {
            // this for put 0 for any number negative
            if(val < 0){
                if (num==1) {
                    document.getElementById("second_input").value=00;
                }
                else if(num==2){
                    document.getElementById("min_input").value=00;
                }
                else{
                    document.getElementById("hours_input").value=00;
                }
            }
            //this for know if it value grater then max
            if(val > 60){
                if (num==1) {
                    document.getElementById("second_input").value=60;
                }
                else if(num==2){
                    document.getElementById("min_input").value=60;
                }
                else if(val >99){
                    document.getElementById("hours_input").value=99;
                }
            }
            // this for put  with the single number
            if(val < 10){
                if (num==1) {
                    document.getElementById("second_input").value="0"+val;
                }
                else if(num==2){
                    document.getElementById("min_input").value="0"+val;
                }
                else{
                    document.getElementById("hours_input").value="0"+val;
                }
            }
        /*this function for put the value in the timer_box 
        immediately when I change the input value */
            sendtodown()
        }
        // this var for the interval for timer
        var interval_down
         // this function for start the timer and change the timer_box
        function downtimer() {
            if(time>0){
             if(time%360000==0){
                 document.getElementById("hours").innerText=parseInt((time-1)/360000)
             }
            //this for minute
             if(time%6000==0 & ((time-1)/6000)%60<10 & ((time-1)/6000)%60>0){
                 document.getElementById("min").innerText="0"+parseInt(((time-1)/6000)%60)
             }
             else if(time%6000==0){
                 document.getElementById("min").innerText=parseInt(((time-1)/6000)%60)
             }
             //this for second
             if(time%100==0 & ((time-1)/100)%60<10 & ((time-1)/100)%60>0){
                 document.getElementById("second").innerText="0"+parseInt(((time-1)/100)%60);
             }
             else if(time%100==0){
                 document.getElementById("second").innerText=parseInt(((time-1)/100)%60)
             }
             //this for milisecond
             if ((time-1)%100<10 ) {
                 document.getElementById("milisecond").innerText="0"+(time-1)%100;
             }
             else
                 document.getElementById("milisecond").innerText=(time-1)%100
            time--;
            document.getElementById("stop").style.cursor="pointer";
            document.getElementById("stop").style.opacity=1;
            }
            // this to change the value for the initioal value 00
            else{
                clearInterval(interval_down)
                document.getElementById("second_input").value="00";
                document.getElementById("min_input").value="00";
                document.getElementById("hours_input").value="00";
                document.getElementById("hours").innerText="00";
                document.getElementById("start").style.opacity=0.5;
                document.getElementById("stop").style.opacity=0.5;
                document.getElementById("stop").style.cursor="not-allowed";
            }
        }
        /*this function for put the value in the timer_box 
        immediately when I change the input value */
        function sendtodown() {
            var sec =document.getElementById("second_input").value;
            var mins=document.getElementById("min_input").value;
            var hour=document.getElementById("hours_input").value;
            document.getElementById("milisecond").innerText="00";
            document.getElementById("second").innerText=sec;
            document.getElementById("min").innerText=mins;
            document.getElementById("hours").innerText=hour;            
            time=(100*sec)+(6000*mins)+(360000*hour);
            if(time>0){
            document.getElementById("start").style.opacity=1;
            document.getElementById("start").style.cursor="pointer";}
            else{
            document.getElementById("start").style.opacity=0.5;
            document.getElementById("stop").style.opacity=0.5;
            document.getElementById("start").style.cursor="not-allowed";
            document.getElementById("stop").style.cursor="not-allowed";}
        }
        /*this function for make split the time and change the time in the 
        stander time and put the value of the time at the div split*/
        function split_time() {
            document.getElementById("split").style.display="block";
            var val= time;
            var h =parseInt( val/360000);
            val=parseInt( val%360000);
            var mi=parseInt( val/6000);
            val=parseInt( val%6000);
            var se =parseInt( val/100);
            val=parseInt( val%100);
            var misec =parseInt( val%100);
            var table=document.getElementById("split").innerHTML+=
            "<p>"+h+":"+mi+":"+se+":"+misec+"</p>";
        }
        /* this function to restart every thing (input and timer_box 
        and hide the split div and start button)change for the initioal state*/
        function restart() {
            document.getElementById("milisecond").innerText="00";
            document.getElementById("second").innerText="00";
            document.getElementById("min").innerText="00";
            document.getElementById("hours").innerText="00";            
            time=0;
            document.getElementById("split").innerHTML=""
            document.getElementById("split").style.display="none";
            document.getElementById("second_input").value="00";
            document.getElementById("min_input").value="00";
            document.getElementById("hours_input").value="00";
            document.getElementById("start").style.opacity=0.5;
            document.getElementById("start").style.cursor="not-allowed";
            document.getElementById("stop").style.opacity=0.5;
            document.getElementById("stop").style.cursor="not-allowed";
        }
        /* this function to show the stopwatch when we click 
        the button  stopwatch at the main page*/
        function showup() {
            document.getElementById("up").style.display="block";
            document.getElementById("main").style.display="none";
            document.getElementById("down").style.display="none";
            document.getElementById("timer_box").style.marginTop="15px"
            document.getElementById("timer_box").style.opacity="1";
            var show =document.getElementsByClassName("show");
            show[0].style.top="12%";
            show[0].style.left="0%";
            show[1].style.top="12%";
            show[1].style.right="0%";
            show[2].style.top="22%";
            show[2].style.left="0%";
            document.getElementById("header").innerText="The Stopwatch o'clock";
        }
        /* this function to show the timer when we click 
        the button the timer at the main page*/
        function showdown() {
            document.getElementById("down").style.display="block";
            document.getElementById("main").style.display="none";
            document.getElementById("up").style.display="none";
            document.getElementById("timer_box").style.marginTop="40px"
            document.getElementById("timer_box").style.opacity="1";
            var show =document.getElementsByClassName("show");
            show[0].style.top="12%";
            show[0].style.left="0%";
            show[1].style.top="12%";
            show[1].style.right="0%";
            show[2].style.top="12%";
            show[2].style.left="40%";
            document.getElementById("header").innerText="The Timer o'clock";
        }
        /* this function to show the main contant when we click 
        the button main at the main page*/
        function showmain() {
            document.getElementById("down").style.display="none";
            document.getElementById("main").style.display="block";
            document.getElementById("up").style.display="none";
            document.getElementById("timer_box").style.opacity="0"
            document.getElementById("timer_box").style.marginTop="-500px"
            var show =document.getElementsByClassName("show");
            show[0].style.top="67%";
            show[0].style.left="5%";
            show[1].style.top="67%";
            show[1].style.right="6%";
            show[2].style.top="12%";
            show[2].style.left="40%";
            document.getElementById("header").innerText="The Timer and Stopwatch o'clock";
        }