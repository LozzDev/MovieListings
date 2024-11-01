const requestURL ="json/documentaries.json";

window.onload = function() {
    setTimeout(function() {
      document.body.classList.add('loaded'); // Añade la clase que oculta el loader y muestra el contenido de la página
    }, 2000); // 2000 ms = 2 segundos
  };



//funcion asincrona

async function fetchMoviesJson(){
    const response= await fetch(requestURL);
    const movies= await response.json();
    return movies;
}

 fetchMoviesJson().then(movies =>{
     for(let i=0;i<movies.documentaries.length;i++){
         const moviesSection= document.getElementById("movieSection");

         let id= movies.documentaries[i].id;
         let poster= movies.documentaries[i].poster;
         let title= movies.documentaries[i].title;
         let year= movies.documentaries[i].year;
         let length= movies.documentaries[i].length;
         let director= movies.documentaries[i].director;
         let season = movies.documentaries[i].season;
         let synopsis= movies.documentaries[i].synopsis;

         moviesSection.innerHTML +=`
             <div class="card mx-auto mb-4 ${season}" style="width: 18rem;" >
                 <img src="${poster}" class="card-img-top mt-2  " alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${title} - ${year}</h5>
                 <p class="card-text text-start">${synopsis}</p>
                 </div>
             </div>
         `
    }
 })

 function zFilter(){
    const superFilms=document.getElementsByClassName("Z");
    const zImage = document.getElementById("zLogo");
    const superImage = document.getElementById("superLogo");

    if(zImage.getAttribute("src") === "./images/Z-color.png"){
        zImage.setAttribute("src", "./images/Z-blanco-y-negro.png");
        
        for(let superFilm of superFilms){
            superFilm.style.display="none";
        }
        if((superImage.getAttribute("src") === "./images/super-blanco-y-negro.png")){
        
            const gokuThinking = document.querySelector("#goku-thinking-container");
            gokuThinking.style.display="block";
            
    
        }
    }else if(zImage.getAttribute("src") === "./images/Z-blanco-y-negro.png"){   
        zImage.setAttribute("src", "./images/Z-color.png");

        for(let superFilm of superFilms){
            superFilm.style.display="block";
        }
        
        const gokuThinking = document.querySelector("#goku-thinking-container");
        gokuThinking.style.display="none";
    }

 }

function superFilter(){
    const zFilms=document.getElementsByClassName("Super");
    const superImage = document.getElementById("superLogo");
    const zImage = document.getElementById("zLogo");

    if(superImage.getAttribute("src") === "./images/super-color.png"){
        superImage.setAttribute("src", "./images/super-blanco-y-negro.png");

        for(let zFilm of zFilms){
            zFilm.style.display="none";
        }
        if((zImage.getAttribute("src") === "./images/Z-blanco-y-negro.png")){
        
            const gokuThinking = document.querySelector("#goku-thinking-container");
            gokuThinking.style.display="block";
            
    
        }
    }else if(superImage.getAttribute("src") === "./images/super-blanco-y-negro.png"){   
        superImage.setAttribute("src", "./images/super-color.png");

        for(let zFilm of zFilms){
            zFilm.style.display="block";
        }

        const gokuThinking = document.querySelector("#goku-thinking-container");
        gokuThinking.style.display="none";
    } 
}