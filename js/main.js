var holder=document.getElementById("holder");
holder.addEventListener("click", principal)

function principal (){
    function mostrarBoton(){
        document.getElementById('oculto').style.display = 'block'

    }
    mostrarBoton();

    function listaTareas(){
        var guardar=document.getElementById("boton");
            guardar.addEventListener("click", secundario)

            function secundario(){
                
                var campo=document.getElementById("holder").value;
                var nodoCampo=document.createTextNode(campo);
                var listado=document.createElement("div")
                    listado.setAttribute("id","listado")
                var textarea=document.createElement("textarea");
                var contenedor=document.getElementById("listaTareas")
                    parrafo.appendChild(nodoCampo); 
                    listado.appendChild(parrafo);
                    contenedor.appendChild(listado)
                

                function moverCaja(){
                    document.getElementById('contenedor').style.float = 'right'
                };
                moverCaja()

            };
    }
    listaTareas()
};


   

















/*

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

*/