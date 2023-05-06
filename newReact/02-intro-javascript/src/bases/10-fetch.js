
const apiKey = 'imrK2t1n9JJ8s2UQuSgripUJMq37tsTj';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );

    // por Edwar

// const apiKey = 'imrK2t1n9JJ8s2UQuSgripUJMq37tsTj'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion
//     .then( resp => resp.json())
//     .then(({data}) =>{
//         const { url } = data.images.original;
//         console.log(url)

//         const img = document.createElement('img');
//         img.src=url;
//         document.body.append( img );
//     })

// .catch( console.warn );

