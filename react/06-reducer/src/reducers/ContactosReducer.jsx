export const ContactosReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
            return [...state, action.payload]
    // el filter "filtra" un nuevo arr con la condicion de conservar los registros diferentes
    // al id que se elimina, osea al hacer click en eliminar se itera el arr de registros actual
    // y conserva todos los registro diferentes al id= action.payload
    case "delete":
        return state.filter((actual) => actual.id !== action.payload);
  
    default:
        return state;
  }
}
