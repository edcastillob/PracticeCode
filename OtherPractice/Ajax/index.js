//querySelector('#userList') LA MANERA EN QUE LO CONOCIMOS
// const listaDeUsuarios = $('#userList'); // sintaxis jquery $()
// console.log(listaDeUsuarios);

// // $.get(URL,callback);
// $.get('https://jsonplaceholder.typicode.com/users', (response)=> {
//     console.log(response);
// })

//                          responde = respuesta de la url de la api placeholder
const responseHandler = (response) => {
    //console.log(response); // --> lista de usuario [{}, {}]
    //const listaDeUsuarios = $('#userList')[0]

    //accedemos al id de ul del html
    const [ listaDeUsuarios ] = $('#userList') //nos da un array por eso destructiring
    console.log('soy ul', listaDeUsuarios);
    response.forEach((user) => {
        console.log(user);
        const newLi = document.createElement('li');
        newLi.innerText = user.name;
        listaDeUsuarios.appendChild(newLi);
    });
}
//peticion de tipo get
// sintaxis -->  $.get(URL,callback);


const [ cargarUsuario ] = $('#cargarUsuarios') //accedemos al id del boton en el html

const getUsuarios = () => {
    $.get('https://jsonplaceholder.typicode.com/users', responseHandler)
}

cargarUsuario.addEventListener('click', getUsuarios)