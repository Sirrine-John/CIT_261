let touchsurface = document.getElementById('touchsurface'),
        startX,
        startY,
        dist,
        threshold = 120, //required min distance traveled to be considered swipe
        allowedTime = 250, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
 
    function handleswipe(isswipe){
        
        if (isswipe === 'right'){
            // touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red; font-size: 22px;">RIGHT</span> swipe!'
            countDown();
        }
        else if (isswipe === 'left'){
            // touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red; font-size: 22px;">LEFT</span> swipe!'
            countUp();
        }   
        else{return 'none';}
    }
    function rightOrLeft(touchobj){
        //console.log("elapsed = "+elapsedTime);
        //console.log("allowed = "+allowedTime);
        //console.log("dist = "+dist);
        //console.log("threshold = "+threshold);
        //console.log(""+Math.abs(touchobj.pageY - startY));
        if (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100){return 'right'}
        else if(elapsedTime <= allowedTime && dist <= (threshold*-1) && Math.abs(touchobj.pageY - startY) <= 100){return 'left'}
        else{return false}
    }
 
    touchsurface.addEventListener('touchstart', function(e){
        // touchsurface.innerHTML = ''
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        // e.preventDefault()
    }, false)
 
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
 
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = rightOrLeft(touchobj);
        //console.log(swiperightBol);
        if (swiperightBol == false){
        }else{
            handleswipe(swiperightBol);
            e.preventDefault()
        }
    }, false)