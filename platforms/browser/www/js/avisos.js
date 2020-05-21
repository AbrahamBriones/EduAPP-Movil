
 // Bandera de carga
 //var allowInfinite = true;

 // ultimo indice cargado
 //var lastItemIndex = $$('.ul card').length;
 //$$('.list li').length;

 // Maximo de items a cargar
 //var maxItems=10;

 // items por carga
 //var itemsPerLoad = 2;
 

//Funcion que detecta cuando se inicia y carga el hmtl "avisos"
$$(document).on('page:init', '.page[data-name="avisos"]', function (e) {
  
  console.log("entra a avisos");

        $.getJSON(server+'api/avisoPorAlumno/'+localStorage.getItem("usuario")+'/'+localStorage.getItem("alumno"),function(data){
          //console.log(JSON.stringify(data));
          /*if (JSON.stringify(data) == '[]') {
            $("#contenido-avisos").append('<p> <center> No existen avisos en el período seleccionado </center> </p>');
          }*/
        })
        .done(function(response){
          var html;   
          //var contAvisos=0; 
          $.each(response, function(index, element){
            
            console.log(index);
            // console.log(element);
         
            if(element.eliminado==0){
              
              arreglo=element.foto.split('.');
              primerNombre=element.nombres.split(' ');
  
              var contenido=element.contenido;
              //console.log(contenido);
              if(contenido.length>58){
                contenido=contenido.substring(0,40);
                contenido=contenido.concat('...');
                //console.log(contenido);
              }
             
              if(element.leido==0){
                //html='<li>'
                html = '<div class="card" id="aviso_'+element.id+'">';
                html += '<div class="list">';
                html += '<div class="item-content">';
                html += '<div class="item-media"><img  class="imagen-profesorAnotacion" src="'+storageServer+element.foto+'"/></div>';
                html += '<div class="item-inner">';
                html += '<div class="item-title alerta-aviso">'+primerNombre[0]+' '+element.apellido_paterno+' '+element.apellido_materno+'</div>';
                html += '<div class="item-after"><a class="accion-eliminar" href="'+element.id+'"><img src="imagenes/eliminar.png"  width="30px"></a></div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="card-content card-content-padding alerta-aviso"><br><span class="negrita" style="font-weight:bold">'+contenido+'</span><a class="elemento" href="'+element.contenido+'/'+element.nombres+'/'+element.apellido_paterno+'/'+element.apellido_materno+'/'+element.id+'/'+element.leido+'" ></a></div>';
                html += '<div class="card-footer">'+element.created_at+'</div>';
                html += '</div>';
                //html+='</li>';
              }else{
                //html='<li>'
                html = '<div class="card" id="aviso_'+element.id+'">';
                html += '<div class="list">';
                html += '<div class="item-content">';
                html += '<div class="item-media"><img  class="imagen-profesorAnotacion" src="'+storageServer+element.foto+'"/></div>';
                html += '<div class="item-inner">';
                html += '<div class="item-title alerta-aviso">'+primerNombre[0]+' '+element.apellido_paterno+' '+element.apellido_materno+'</div>';
                html += '<div class="item-after"><a class="accion-eliminar" href="'+element.id+'"><img src="imagenes/eliminar.png" width="30px"></a></div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="card-content card-content-padding alerta-aviso" ><br>'+contenido+'<a class="elemento" href="'+element.contenido+'/'+element.nombres+'/'+element.apellido_paterno+'/'+element.apellido_materno+'/'+element.id+'/'+element.leido+'" ></a></div>';
                html += '<div class="card-footer">'+element.created_at+'</div>';
                html += '</div>';
                //html+='</li>'
              }
              $("#contenido-avisos").append(html);
              //arr.push(html);
            }
           
          })

        console.log('contAvisos',$(".card").toArray().length);
        console.log('.card',$(".card").toArray());
        if($(".card").toArray().length==0){
          $("#contenido-avisos").append('<p> <center> No existen avisos en el período seleccionado </center> </p>');
        }
         
        });
        
        /*if(contAvisos==0){
          $("#contenido-avisos").append('<p> <center> No existen avisos en el período seleccionado </center> </p>');
        }*/


        /*$$('.my-sheet').on('sheet:open', function (e, sheet) {
          console.log('my-sheet open');

        });
     
        $$('.my-sheet').on('sheet:opened', function (e, sheet) {
          console.log('my-sheet opened');
        });

        */
       
// Attach 'infinite' event handler
/*$$('.infinite-scroll-content').on('infinite', function () {
  // Exit, if loading in progress
  if (!allowInfinite) return;

  // Set loading flag
  allowInfinite = false;

  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    allowInfinite = true;

    if (lastItemIndex >= maxItems) {
      // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
      app.infiniteScroll.destroy('.infinite-scroll-content');
      // Remove preloader
      $$('.infinite-scroll-preloader').remove();
      return;
    }

    // Generate new items HTML
    var html = '';
    for (var i = lastItemIndex + 1; i <= lastItemIndex + itemsPerLoad; i++) {
      //html += '<li>Item ' + i + '</li>';
      html += arr[i];
    }

    // Append new items
    $$('.list ul').append(html);

    // Update last loaded index
    lastItemIndex = $$('.ul card').length;
  }, 1000);
});*/
     

})



 // Evento ejecutado al clickear el contenido de la tarjeta
 $(document).on('click', '.alerta-aviso', function () {
  var contenido = $(this).find('a').attr('href');
  var arreglo=contenido.split('/');
  var nombre= arreglo[1].split(' ');
  var mensaje=arreglo[0];


  var id=arreglo[4];
  var leido=arreglo[5];
  var aux=arreglo[0];
  app.sheet.open('.my-sheet', true);
  $('#modal-contenido').html(mensaje);
 
  /*var output = [];
  var mensaje=[""];
  var letters = 25;
  var i = 0;

  while(i < aux.length){
    console.log(i);
    var initIndex = i;
    var endIndex = i + letters;
    output.push(aux.substring(initIndex, endIndex));
    i = endIndex;
  }

  //console.log(output);

  /*for(var j=0;j<output.length;j++){
    mensaje[0]+=output[j].concat('<br>');
      
  }*/

  $(this).find('span').css("font-weight","normal");


  if(leido==0){
    $.ajax({
      type: "POST",
      url: server+'api/avisoleido',
      data: {id:id,leido:leido},
      success: function(data){
        console.log(data);
       
      },
    });
    
  }

});


// Evento ejecutado al clickear la cabecera de la tarjeta
$(document).on('click', '.item-after', function () {
  console.log('Estoy en la imagen');
  var id = $(this).find('a').attr('href');
  console.log(id);

  app.dialog.confirm('<center>¿Desea eliminar el aviso?</center>','<center>EduApp</center>' , function(){
    $.ajax({
      type: "POST",
      url: server+'api/avisoEliminado',
      data: {id:id},
      success: function(data){
        console.log(data);
        estaVacio();
      },
    });

    $('#aviso_'+id+'').remove();
  })


});
//14.293.275-k

function estaVacio(){
  console.log('contAvisos',$(".card").toArray().length);
  console.log('.card',$(".card").toArray());
  if($(".card").toArray().length==0){
    $("#contenido-avisos").append('<p> <center> No existen avisos en el período seleccionado </center> </p>');
  }
}