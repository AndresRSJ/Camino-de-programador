let Usuario={
    posts:[postOne={ likes:4,}, posteTwo={ likes:5,}, postThree={ likes:22,},],
}

let suma=0;
 for(let i=0; i<Usuario[posts].length; i++){
    suma+=Usuario.posts[i].likes;
 }
 console.log (suma);