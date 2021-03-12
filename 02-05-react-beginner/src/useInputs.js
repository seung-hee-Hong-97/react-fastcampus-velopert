import { useState, useCallback, useReducer } from 'react';

function reducer(state, action) {
    // CHANGE
    // RESET
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'RESET':
            return action.initialForm;
        default:
            throw new Error('Unhandled Exception');
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value,
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({ type: 'RESET', initialForm });
    }, [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;
