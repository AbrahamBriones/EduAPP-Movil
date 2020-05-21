//Funcion que detecta cuando se inicia y carga el hmtl "materiales"
$$(document).on('page:init', '.page[data-name="materiales"]', function (e) {
    console.log('Entraste a materiales');

    //Proceso para obtener año y periodo actual
    var hoy = new Date();
    var yyyy = hoy.getFullYear();
    var mm = hoy.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    var semestreActual = Math.floor((mm - 1) / 6) + 1;
  
    if (semestreActual == 1) {
        var html_select = '<option value="1" selected> Semestre 1 </option>';
        html_select += '<option value="2">Semestre 2</option>';
    } else {

        var html_select = '<option value="1"> Semestre 1 </option>';
        html_select += '<option value="2" selected>Semestre 2</option>';
    }

    $("#select-semestre").empty();
    $("#select-semestre").append(html_select);
    $('#anyo').val(yyyy);
    obtenerAsignaturas(semestreActual, yyyy);

    $(function () {
      $('#anyo').on('change', onAnyoChange);
      $('#select-semestre').on('change', onSelectSemestresChange);
    });
    
    function onSelectSemestresChange() {
        semestreActual = $(this).val();
        obtenerAsignaturas(semestreActual, yyyy);
    }
    
    function onAnyoChange() {
        yyyy = $(this).val();
        obtenerAsignaturas(semestreActual, yyyy);
    }

    
    function obtenerAsignaturas(semestre, anyo) {
    $("#contenido-asignaturas").empty();
    $.getJSON(server+'api/material/asignatura/' + localStorage.getItem("alumno") + '/' + semestre + '/' + anyo, function (data) {
      console.log(JSON.stringify(data));
      if (JSON.stringify(data) == '[]') {
         /*app.dialog.alert('No existen Asignaturas en el período seleccionado', 'Sin registros', function () {
         });*/
        
        $("#contenido-asignaturas").append('<li class="item-content">No existen asignaturas en el período seleccionado</li>');
      }
    })
      .done(function (response) {
        var html = '';
        $.each(response, function (index, element) {
            var nombresProfesor = element.nombre_profesor.split(' ');
           
           /* html = '<div class="card" id="">';
            html += '<div class="list">';
            html += '<div class="item-content">';
            html += '<div class="item-media"><img  class="" src=""/></div>';
            html += '<div class="item-inner">';
            html += '<div class="item-title">'+element.nombre_asignatura+'</div>';
            html += '<div class="item-after"></div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="card-content card-content-padding"><br> Profesor: '+nombresProfesor[0]+' '+element.profesor_apellido+'<br>Descripcion: '+element.descripcion+'</div>';
            html += '<div class="card-footer"> Periodo: '+anyo+'- '+semestre+'</div>';
            html += '</div>';*/

          html += '<ul>';
          html += '<li>';
          html += '<a href="' + element.id_curso +'?'+element.nombre_asignatura+ '" class="item-link item-content no-ripple" id="detalle-materiales">';
          html += '<div class="item-media"><h2><span class="'+element.nombre_asignatura.charAt(0).toUpperCase()+'circulo">' + element.nombre_asignatura.charAt(0) + '</span></h2></div>';
          html += '<div class="item-inner">';
          html += '<div class="item-title" id="asignatura">' + element.nombre_asignatura;
          html += '<div class="item-text">Prof: ' + nombresProfesor[0] + '</div>';
          html += '</div>';
          html += '<div>';
          html += '<div class="item-header">';
          html += '<div class=""></div>';
          html += '</div>';
          html += '<div class=""></div>';
          html += '</div>';
          html += '</div>';
          html += '</a>';
          html += '</li>';
          html += '</ul>';

        })
        // html += '</div>';
        $("#contenido-asignaturas").append(html);
      })
      .fail(function () {
        //Info es cuando guarde el arreglo sin conexión, todavia no lo hago
        if (typeof info == 'undefined' || info == 'null' || info == '[]') {
          app.dialog.alert('Por favor intente nuevamente', 'Sin conexión', function () {
            app.router.navigate("/inicio/");
          });
        }
      });
    }
});



$(document).on('click', '#detalle-materiales', function () {
  var arregloMateriales=$(this).attr('href').split('?');
  var id_curso = arregloMateriales[0];
  nombreAsignatura=arregloMateriales[1];

  console.log(id_curso);
  localStorage.setItem("id_curso", id_curso);
  app.router.navigate("/listadoMateriales/");
});
