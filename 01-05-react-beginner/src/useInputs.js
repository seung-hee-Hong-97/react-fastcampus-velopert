import { useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            const { name, value } = action;
            return (state = { ...state, [name]: value });
        case 'RESET':
            return (state = action.data);
        default:
            throw new Error('Unhandled Error');
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', name, value });
    }, []);
    const reset = useCallback((e) => dispatch({ type: 'RESET', data: initialForm }));
    return [form, onChange, reset];
}

export default useInputs;
