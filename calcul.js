function tirageNombre(min, max) {
    // cette fonction tire un nombre au hasard entre min et max
    let nombre = Math.floor(Math.random() * (max-min+1)) + min
    return nombre
   }
   for (let t=0; t < 50; t++) {
   console.log(tirageNombre(5,50))
   }
    
    function ecrireNombre(ID, valeur) {
    document.querySelector(ID).value = valeur
 
    }
    function lireNombre(ID) {
    return Number(document.querySelector(ID).value)
    }


    ecrireNombre("#nombreA", tirageNombre(1,50))
    ecrireNombre("#nombreB", tirageNombre(1,50))
    function repondre() {
      
        let resultatJuste = lireNombre("#nombreA") + lireNombre("#nombreB")
        let resultatUser = lireNombre("#reponse")

        if (resultatUser == resultatJuste) {
        document.querySelector("#reponse").style.backgroundColor = 
        "#77FF00"
        } else {
        document.querySelector("#reponse").style.backgroundColor = 
        "#FFAA00"
        }
        }