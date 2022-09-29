
let apikey = "563492ad6f91700001000001fd85be44940744508e6a2883624e45d7";
/*
fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: apikey
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data.photos)
   })*/

document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
  fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
      Authorization: apikey
    }
  })
    .then(resp => {
      return resp.json()
    })
    .then(data => {

      console.log(data.img)


      for (var i = 0; i < 9; i++) {

        let container = document.getElementsByClassName("card mb-4 box-shadow")
        let immagini = document.createElement("img")
        immagini.classList.add("card-img-top")
        immagini.src = data.photos[i].src.original;
        console.log(immagini.src)
        container[i].getElementsByClassName("card-img-top")[0].remove();

        container[i].prepend(immagini);



      }




    });

}

document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
  fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
      Authorization: apikey
    }
  })
    .then(resp => {
      return resp.json()
    })
    .then(data => {

      console.log(data.photos)


      for (var i = 0; i < 9; i++) {

        let container = document.getElementsByClassName("card mb-4 box-shadow")
        let immagini = document.createElement("img")
        immagini.classList.add("card-img-top")
        immagini.style.height = "15rem"
        immagini.src = data.photos[i].src.original;
        console.log(immagini.src)
        container[i].getElementsByClassName("card-img-top")[0].remove();

        container[i].prepend(immagini);



      }




    }).catch(err => console.error(err))


}



document.getElementById("mySecondBtn").addEventListener("click", displayDate2);
function displayDate2() {
  fetch("https://api.pexels.com/v1/search?query=healthy-lifestyle-9o8jw8h", {
    headers: {
      Authorization: apikey
    }
  })
    .then(resp => {
      return resp.json()
    })
    .then(data2 => {

      console.log(data2.photos)


      for (var k = 0; k < 9; k++) {

        let container = document.getElementsByClassName("card mb-4 box-shadow")
        let immagini = document.createElement("img")
        immagini.classList.add("card-img-top")
        immagini.style.height = "15rem"
        immagini.src = data2.photos[k].src.original;

        console.log(immagini.src)
        container[k].getElementsByClassName("card-img-top")[0].remove();

        container[k].prepend(immagini);



      }




    });

}


/*
fetch("https://api.pexels.com/v1/search?query=healthy-lifestyle-9o8jw8h", {
headers: {
 Authorization: apikey
}
})
.then(resp => {
 return resp.json()
})
.then(data3 => {

 console.log(data3.photos)

 qui stavo provando a sistemare la function che aveva creato pierpaolo. lui ha usato delle immagini che aveva nella cartella .io devo far scorre le immagini prese dall'API

 document.getElementById("carosel").addEventListener("onload", ()=>{
 let indice = -1;
        slider();
        function slider() {
            percorso = './assets/img/';
            //              0                   1                   2
            immagini = [percorso + '1.webp', percorso + '2.png', percorso + '3.png']; // array con i link delle immagini

            indice++;
            if (indice == 3) { indice = 0; }
            //            document.getElementById('puntatore').innerHTML="<img src='"+immagini[indice-1]+"'/> <img src='"+immagini[indice]+"'/> <img src='"+immagini[indice+1]+"'/>";
            document.getElementById('puntatore').innerHTML = "<img src='" + immagini[indice] + "'/>";
            setTimeout(slider, 2000); // setTimeout(funzione da eseguire , ritardo con cui viene invocata la funzione)
            // funzione autoricorsiva
        }

 });

*/




















 /*in queseto modo sostituisco url presente nela card
 let api_key = "563492ad6f91700001000001f56a25ef6c6648dd94837fc1d4fd6724";
        let immagini = document.getElementsByClassName("card-img-top");

        function loadImages() {
            fetch("https://api.pexels.com/v1/search?query=people", {
                headers: {
                    Authorization: api_key
                }
            })
                .then(resp => {
                    return resp.json()
                })
                .then(data => {
                    console.log(data)
                    for (i = 0; i < immagini.length; i++) {
                        immagini[i].src = data.photos[i].src.original;
                    }

                })
        }
 

});*/



