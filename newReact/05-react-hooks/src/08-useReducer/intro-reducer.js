//Seteo el estado inicial 

const initialState= [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];


// Reducer, fn pura, se setea valor inicial y la accion que va a ejecutar para act el estado

const todoReducer = (state = initialState, action = {} ) => { 

    if ( action.type === '[TODO] add todo' ){

        return [ ...state, action.payload ];
    }

    return state;
 }


 //variable qe ejecutará el reducer a partir de una accion que necesitemos
 //

let todos = todoReducer();

//crear la nueva tarea
const newTodo = {
    id: 2,  
    todo: 'Recolectar la piedra del poder',
    done: false,
}

// agregar un todo
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}



todos = todoReducer( todos, addTodoAction )

 console.log({state: todos});