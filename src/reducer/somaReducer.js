import { useReducer } from 'react';

const STATE_INICIAL = {
    resultado: ''
}

const somaReducer = ( state = STATE_INICIAL, action ) => {
    console.log(`Action do tipo ${action.type} vai ser executada, valor: ${action.payload}`)
    switch( action.type ) {
        case 'SUBTRAIR':
        case 'SOMA': 
            return { ...state, resultado: action.payload }
        default:
            return state
    }
}

const useStore = () => useReducer(somaReducer, STATE_INICIAL)
export default useStore;
