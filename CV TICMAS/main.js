(function(){
    setInterval(function(){
        var primeraLetra = document.getElementById('color-uno'),
        segundaLetra = document.getElementById('color-dos'),

        coloresDegradado = ["#a4c739","#afce52","#486CFC","#FC486C","#993748","#2C631C","#1C2C63"," #631C2C"];
        coloresSimples = ["red","blue","yellow","white","black","cyan","whitesmoke","violet","magenta"];

        primeraLetra.style.color = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length )];
        segundaLetra.style.color = coloresSimples[Math.floor(Math.random() * coloresDegradado.length )];
  
    },1000);
}())