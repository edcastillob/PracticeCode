

export const todoReducer = ( initialState, action ) => { 

    switch ( action.type ) {
        case 'ABC':
            throw new Error('Action.type ABC aún no esta implementada');
    
        default:
            return initialState;
    }   
 }