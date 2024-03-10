var imageslider = document.querySelector(".imageslider")
        var slider = document.querySelectorAll(".slider")
        var right = document.querySelector(".right")
        var left = document.querySelector(".left")
        var counter =0;
        var totalslider = slider.length


        right.addEventListener("click",changeright)
        function changeright(){
            if(counter>=totalslider-1){
                counter = 0;
            }else{
                counter++;
            }
           
            change() 
        }


        left.addEventListener("click",changeleft)
        function changeleft(){
            if(counter<=0){
                counter= totalslider-1
            }else{
                counter--;
            }
            change()
        }


        function change(){
            slider.forEach(slide=>{
                slide.classList.remove("active");
                slide.classList.add("hidden"); 
                slider[counter].classList.add("active");
            })
            dotss.forEach(dots=>{
            dots.classList.remove("dotsactive");
                dots.classList.add("normol");
                dotss[counter].classList.add("dotsactive")         
        })
    }   

        // to insert the dots into the foreach slider
        // And create the div and also add classList 

        var dotcontainer = document.querySelector(".dotcontainer")
      
          slider.forEach(slide=>{
            var dot = document.createElement("div");
            dot.classList.add("dots")
            dotcontainer.appendChild(dot);
        })

        // dots collection

        var dotss = document.querySelectorAll(".dots")
        dotss[counter].classList.add("dotsactive")
        
        // slider open and closed

        var menu_buger = document.querySelector(".menu_buger")
        var slider_navigation_back = document.querySelector(".slider_navigation_back");
        var slider_close = document.querySelector(".slider_close");
        menu_buger.addEventListener("click",()=>{
            slider_navigation_back.classList.add("slider_open")
        })
        slider_close.addEventListener("click",()=>{
            slider_navigation_back.classList.remove("slider_open")
        })
