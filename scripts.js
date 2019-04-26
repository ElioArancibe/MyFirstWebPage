
        
        /*mostrar y ocultar informacion*/
    var numero=document.getElementById("icon-number");
    var email=document.getElementById("icon-mail");
    var flagN=false, flagM=false;
        
        numero.addEventListener("click",function(){
            if(flagN){
                flagN=false;
                 numero.classList.add("icon-number");
                numero.innerHTML="";
            }else{
                
                flagN=true;
                numero.innerHTML="+54-113354-7784";
                numero.classList.remove("icon-number");
            }
        });
        
        
        
        email.addEventListener("click",function(){
            if(flagM){
                flagM=false;
                 email.classList.add("icon-mail");
                email.innerHTML="";
            }else{
                
                flagM=true;
                email.innerHTML="ElioArancibe98@gmail.com";
                email.classList.remove("icon-mail");
            }
        });
        
    
        
        /*Aside*/
        var opcion1 = document.querySelector(".opc1"),
        opcion2= document.querySelector(".opc2"),
        opcion3=document.querySelector(".opc3"),
        opcion4=document.querySelector(".opc4");
        
        
        var txt1=document.getElementById("box1"),
        txt2= document.getElementById("box2"),
        txt3=document.getElementById("box3"),
        txt4=document.getElementById("box4");
    
    opcion1.addEventListener("click", function(){
            txt1.style.opacity=1;
            txt2.style.opacity=0;
            txt3.style.opacity=0;
            txt4.style.opacity=0;
            
            opcion1.classList.add("active");
            opcion2.classList.remove("active");
            opcion3.classList.remove("active");
            opcion4.classList.remove("active");
        });
    opcion2.addEventListener("click", function(){
            txt1.style.opacity=0;
            txt2.style.opacity=1;
            txt3.style.opacity=0;
            txt4.style.opacity=0;
            
            opcion1.classList.remove("active");
            opcion2.classList.add("active");
            opcion3.classList.remove("active");
            opcion4.classList.remove("active");
        });

    opcion3.addEventListener("click", function(){
            txt1.style.opacity=0;
            txt2.style.opacity=0;
            txt3.style.opacity=1;
            txt4.style.opacity=0;
            
            opcion1.classList.remove("active");
            opcion2.classList.remove("active");
            opcion3.classList.add("active");
            opcion4.classList.remove("active");
        });
     opcion4.addEventListener("click", function(){
            txt1.style.opacity=0;
            txt2.style.opacity=0;
            txt3.style.opacity=0;
            txt4.style.opacity=1;
             
            opcion1.classList.remove("active");
            opcion2.classList.remove("active");
            opcion3.classList.remove("active");
            opcion4.classList.add("active");
        });
    
        
        
        
        
        /*clear si se cambia el tamaño*/
  window.onresize=limpiar;

    function limpiar(){
            if(window.innerWidth < 1032){
                txt1.style.opacity=1;
                txt2.style.opacity=1;
                txt3.style.opacity=1;
                txt4.style.opacity=1;

                opcion1.classList.remove("active");
                opcion2.classList.remove("active");
                opcion3.classList.remove("active");
                opcion4.classList.remove("active");
                
            }else{
                txt1.style.opacity=1;
                txt2.style.opacity=0;
                txt3.style.opacity=0;
                txt4.style.opacity=0;
            }
  }
    
    