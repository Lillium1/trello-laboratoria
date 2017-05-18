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
                var parrafo=document.createElement("p")
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