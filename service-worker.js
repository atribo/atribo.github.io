let files = [
"/",
"css/application.css",
"js/lib/jquery.min.js",
"js/application.js",
"img/icon.png",
"https://fonts.googleapis.com/css?family=Montserrat:400,900",
]

self.addEventListener("install", function(){
  console.log("a tribo personagens ready")
  caches.open("a-tribo").then(cache => {
    cache.addAll(files)
  })
})

self.addEventListener("fetch", function(event){
    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })
    event.respondWith(promiseResposta)
})
