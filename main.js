setInterval(() => {
var agora = new Date()
var hora = agora.getHours()
var minuts = agora.getMinutes()
var segunds = agora.getSeconds()
var res = document.getElementById("res")
var res1=document.getElementById("res1")
var res2= document.getElementById("res2")
var body = document.getElementById("body")
var foot=document.getElementById("footer")
var img=document.getElementById("imagem")
       var day_night = "AM"
        if (hora> 12) {
                day_night = "PM";
                hora = hora - 00;
                
        } 
        if(hora >= 18){
                body.style.background="black"
        }
        if (segunds < 10) {
                segunds = "0" + segunds;
        }
        if (minuts < 10) {
                minuts = "0" + minuts;
        }
        if (hora < 10) {
                hora = "0" + hora;
        }
        
res.textContent=hora+":"+minuts+":"+segunds+" "+day_night
res2.innerHTML="Agora são exatamente "+hora+" horas"
})

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var pop=document.getElementById("popup")
  var agora = new Date()
  var hora = agora.getHours()
  var minuts = agora.getMinutes()
  var segunds = agora.getSeconds()
btn.onclick= function() {
      
        
        modal.style.display = "block";
        pop.style.color="black"
        
        if(hora < 12){
                pop.innerHTML="Bom dia"
        }
        else if(hora <= 18){
                pop.innerHTML="Boa tarde"
        }
        else{
                pop.innerHTML="Boa noite"
        }
         
}

span.onclick = function() {
        modal.style.display = "none";
}
window.onclick = function(event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
}