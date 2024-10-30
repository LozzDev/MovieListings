const requestURL ="../json/documentaries.json";

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
         let synopsis= movies.documentaries[i].synopsis;

         moviesSection.innerHTML +=`
             <div class="card mx-auto mb-4" style="width: 18rem;">
                 <img src="${poster}" class="card-img-top mt-2  " alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${title} - ${year}</h5>
                 <p class="card-text">${synopsis}</p>
                 <a href="#" class="btn btn-primary d-flex justify-content-center">Ver ahora</a>
                 </div>
             </div>
         `
    }
 })


        
