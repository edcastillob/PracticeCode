const  peticion = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await response.json();
    return data;
};

const data = peticion().then(console.log); //vid 19