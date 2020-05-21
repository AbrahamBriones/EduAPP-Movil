//Funcion que detecta cuando se inicia y carga el hmtl "inicio"
$$(document).on('page:init', '.page[data-name="inicio"]', function (e) {

  const push = PushNotification.init({
    android: {
      "senderID": "796845603929"
    },
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      },
    ios: {
      alert: "true",
      badge: "true",
      sound: "true"
    },
    windows: {}
  });

  $.getJSON(server+'api/revisarToken/'+localStorage.getItem("usuario"), function(data) {
    console.log( "success");
    tokenBd=data[0].token;
    console.log('El usuario posee el token: ',tokenBd);

    if(tokenBd==null){
      console.log('No hay token registrado');
      console.log(tokenBd);
      //token='dy97EKcJPPs:APA91bH5BqkNRa0MtsH69suzlpthSVab6DIy3sPkaRnEuPJCYy0B7_-Aqh0ApB3IN9CmBQZp2-4tuCnuNGq8WEE_v07pSiao8aVyOCK2ZGHQffi7KQ4Z-vZRc_nxAYrJnBAFgAP0ZSBh';

      push.on('registration', (data) => {
      
        console.log('este es el id de registro:',data.registrationId);
        console.log('este es el tipo de registro:',data.registrationType);
        token=data.registrationId;
        $.ajax({
          type: "POST",
          url: server+'api/registrarToken',
          data: { id: localStorage.getItem("usuario"), token: token },
          success: function (data) {
            console.log(data);
          },
        });
  
      });
      /**/
  
      
    }

    /*push.on('registration', (data) => {
      
        console.log('este es el id de registro:',data.registrationId);
        console.log('este es el tipo de registro:',data.registrationType);
        token=data.registrationId;
        $.ajax({
          type: "POST",
          url: 'http://127.0.0.1:8000/api/registrarToken',
          data: { id: localStorage.getItem("usuario"), token: token },
          success: function (data) {
            console.log(data);
          },
        });
  
      });*/

  });
  var mensajecerrarSesion = app.toast.create({
    text: 'Sesión cerrada',
    closeTimeout: 2000,
  });
  // $.getJSON(server+'api/alumnosporapoderado/30', function (data) {
  $.getJSON(server+'api/alumnosporapoderado/' + localStorage.getItem("usuario"), function (data) {
    //Si existen datos
    if (typeof data !== 'undefined' && data.length > 0) {
      // the array is defined and has at least one element
      $(".nombre-alumno").empty();
      html = '<input class="foto-alumno" type=image src="'+storageServer+data[0].foto_alumno+'">';
      $("#foto-alumno").empty();
      $("#foto-alumno").append(html);
      html = '<p>' + data[0].nombre_alumno + '</p>';
      $(".nombre-alumno").empty();
      $(".nombre-alumno").append(html);
      html = data[0].curso;
      $(".curso").empty();
      $(".curso").append(html);
      localStorage.setItem("alumno", data[0].id);
    }
    // alert(localStorage.getItem("alumno"));
  })
    .done(function (response) {
      var foo = [];
      $.each(response, function (index, element) {
        foo.push({
          text: JSON.stringify(element.nombre_alumno).slice(1, -1),
          bold: true,
          icon: '<img src="'+storageServer+element.foto_alumno+'" width="30"/>',
          onClick: function () {
            // alert(element.id);
            // localStorage.setItem("alumno", element.id);
            // alert(localStorage.getItem("alumno"));
            html = '<input class="foto-alumno" type=image src="'+storageServer+element.foto_alumno+'">';
            $("#foto-alumno").empty();
            $("#foto-alumno").append(html);
            html = '<p>' + element.nombre_alumno + '</p>';
            $(".nombre-alumno").empty();
            $(".nombre-alumno").append(html);
            html = element.curso;
            $(".curso").empty();
            $(".curso").append(html);
            localStorage.setItem("alumno", element.id);
            //Limpiar Actividades del alumno anterior
            localStorage.setItem("info_actividades", null);
          }
        })
      });

      var ac3 = app.actions.create({
        buttons: [
          foo,
          [
            {
              text: 'Cambiar contraseña',
              // color: 'red',
              onClick: function (){
                app.router.navigate("/cambiarContrasenia/");
              }
            },
            {
              text: 'Cerrar sesión',
              color: 'red',
              onClick: function () {
                mensajecerrarSesion.open();
                localStorage.setItem("usuario", null);
                localStorage.setItem("alumno", null);
                localStorage.setItem("info_actividades", null);
                localStorage.setItem("jsonAlumno", null);
                app.router.navigate("/login/");
              }
            }
          ]
        ]
      });

      $$('.ac-3').on('click', function () {
        ac3.open();
      });


    }).fail(function () {
      html = '<p> Sin conexión, presione aquí para actualizar </p>';
      $(".nombre-alumno").empty();
      $(".nombre-alumno").append(html);
      $$('.ac-3').on('click', function () {
        app.router.navigate("/inicioAux/");
      });
    });

})

//Funcion que detecta cuando se inicia y carga el hmtl "inicioAux"
$$(document).on('page:init', '.page[data-name="inicioAux"]', function (e) {
  app.dialog.alert('Actualizado', 'EduAPP', function () {
    app.router.navigate("/inicio/");
  });
})


// function cambiarContraseña (){
//   alert("hola");
// }
