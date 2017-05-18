var holder=document.getElementById("holder");
var box1=document.getElementById("box1");
holder.addEventListener("click",function(){
        var divo=box1.parentNode;
        var textarea=document.createElement("textarea")
        	textarea.setAttribute("id","areatext");
			divo.appendChild(textarea);

    function listaTareas(){
        var guardar=document.getElementById("boton");

        	guardar.addEventListener("click", function(){
	        var campo=document.getElementById("areatext").value;
	        var nodoCampo=document.createTextNode(campo);
	        var parrafo=document.createElement("p");
	        var contenedor=document.getElementById("contenedor")
	        	parrafo.appendChild(nodoCampo);
	        	contenedor.appendChild(parrafo);
        
        	})

        function eliminar(){
	        var elimina=document.getElementById("borra");
	        	elimina.removeChild(holder);
	   		};
    	eliminar();


    }
    listaTareas();
    
});

