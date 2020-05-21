// Initialize app
var myApp = new Framework7();
var tokenBd;
var token;
var nombreAsignatura;
//var localHost='http://127.0.0.1:8000/';
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
// Funcion que permite definir el archivo raiz del proyecto y navegar por diferentes rutas que
// sean establecidas
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Se agregan las distintas rutas de archivos html externos
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/index/',
      url: 'index.html',
    },
    {
      path: '/login/',
      url: 'login.html',
    },
    {
      path: '/inicio/',
      url: 'inicio.html',
    },
    {
      path: '/inicioAux/',
      url: 'inicioAux.html',
    },
    {
      path: '/notas/',
      url: 'notas.html',
    },
    {
      path: '/notasDetalles/',
      url: 'notasDetalles.html',
    },
    {
      path: '/actividades/',
      url: 'actividades.html',
    }, {
      path: '/horario/',
      url: 'horario.html',
    }, {
      path: '/anotaciones/',
      url: 'anotaciones.html',
    }, {
      path: '/inasistencias/',
      url: 'inasistencias.html',
    },
    {
      path: '/cambiarContrasenia/',
      url: 'cambiarContrasenia.html',
    },
    {
      path: '/avisos/',
      url: 'avisos.html',
    }, {
      path: '/materiales/',
      url: 'materiales.html',
    }, {
      path: '/listadoMateriales/',
      url: 'listadoMateriales.html',
    },
  ]
  // ... other parameters
});
//Función que carga una vista principal en el html raiz definido previamente
var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
//Funcion que detecta cuando se inicia el proyecto en phonegap
$$(document).on('deviceready', function () {
  console.log(localStorage.getItem("usuario"));
  console.log("Device is ready!");

 

  if (localStorage.getItem("usuario") == null || localStorage.getItem("usuario") == 'null') {
    app.router.navigate("/login/");

  } else {
    app.router.navigate("/inicio/");
  }

  /**/

  /*push.on('notification', (data) => {
    console.log("noti",data.message);
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
  });

  push.on('error', (e) => {
    console.log("error",e.message);
  });*/
  

});
// Funcion que detecta cuando se inicia y carga una página
// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized
  console.log(e);

})

var intentardenuevo = new Framework7({
  dialog: {
    // change default "OK" button text
    buttonOk: 'Intentar de nuevo',
  }
});



var pageHistory = []; $(document).on("deviceready", onDeviceReady); function onDeviceReady() { $(document).on("pagecontainerload", onPageLoad); $(document).on("backbutton", onBackButton); } function onBackButton(e) { e.preventDefault(); pageHistory.pop(); if (pageHistory.length == 0) { navigator.app.exitApp(); } else { navigator.app.backHistory(); } } function onPageLoad(e, ui) { var pageId = ui.toPage.attr('id'); if (pageId !== pageHistory[pageHistory.length]) { pageHistory.push(pageId); } }

var server = 'http://parra.chillan.ubiobio.cl:8075/abraham.briones1501/public/';
var storageServer = 'http://parra.chillan.ubiobio.cl:8075/abraham.briones1501/storage/app/public/';
//var server='http://127.0.0.1:8000/';
//var storageServer='http://127.0.0.1:8000/storage/';
