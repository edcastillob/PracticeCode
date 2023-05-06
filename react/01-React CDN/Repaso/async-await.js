const saludo = () => { 
    return new Promise ((resolve) => {
        resolve ("Workins in promises");
}) 
};

saludo().then((response) => console.log(response));

// usando async

const saludoA = async() => {
    return "Promises Async"
};
saludoA().then((respuesta) => console.log(respuesta));


//----------------------------------------
const peticion = async() => {
   setTimeout(() => {
    const datos = {
        id:5,
        name: "Juana Blazco",
        username: "Jblazco",
        email: "juanablazco@gmail.com",
   };
   console.log(datos);
}, 3000);

};

peticion().then(console.log());