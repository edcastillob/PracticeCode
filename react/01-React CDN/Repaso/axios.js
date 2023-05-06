axios.get("https://jsonplaceholder.typicode.com/users/3")
.then(({ data }) =>  console.log(data)); // se hace destructuring para accedes a las propiedades sin
                                        // repetir el data... un ej de direccion data.address

                                        