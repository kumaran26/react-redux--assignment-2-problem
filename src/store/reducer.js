const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_PERSON'){
        return {
            ...state,
            persons: state.persons.concat(action.value)
        }
    } else if(action.type === 'DELETE_PERSON'){
        return {
            ...state,
            persons: state.persons.filter(person => person.id !== action.value)
        }
    }
    return state;
}

export default reducer;