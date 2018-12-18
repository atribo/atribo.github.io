const version = 5;

let files = [
"/",
"css/application.css",
"js/lib/jquery.min.js",
"js/lib/siema.min.js",
"js/application.js",
"index.html",
"img/icon.png",
"img/icons.png",
"img/card-background.jpg",
"https://fonts.googleapis.com/css?family=Montserrat:400,900",
"img/characters/cura.png",
"img/characters/ladislau.png",
"img/characters/lynx.png",
"img/characters/pantera.png",
"img/characters/portal.png",
"img/characters/puma.png",
"img/characters/tiborg.png",
"img/characters/ultra.png",
"img/characters/volt.png",
]

self.addEventListener("install", function(){
  console.log("atribo is ready");

  caches.open("atribo-files-" + version).then(cache => {
    cache.addAll(files)
      .then(function(){
        caches.delete("atribo-files-" + (version - 1));
        caches.delete("atribo-files");
      });
  });

});

self.addEventListener("fetch", function(event){
    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })
    event.respondWith(promiseResposta)
})
