// Crea la mappa per memorizzare i post
const postMap = new Map();

// Recupera i dati dai post
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())  // Converte i dati in formato JSON
  .then(posts => {

    posts.forEach(post => {
      postMap.set(post.id, post);
    });
    postMap.forEach(post => {
        var riga = `<h2>Post #${post.id}: ${post.title}</h2><p>${post.body}</p>;`;
        document.
    
    });
  });
