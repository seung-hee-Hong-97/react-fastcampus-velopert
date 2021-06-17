import { useCallback, useReducer } from 'react';

// 커스텀 훅은 자주 사용되는 컴포넌트의 반복되는 로직을 포함시킨 내용이라고 생각하자.
// 커스텀 훅을 만들 때는  use라는 키워드로 시작해서 기능을 나타내는 단어를 선정하여 함수를 만듦.

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'RESET':
            return {
                ...action.initialForm,
            };
        default:
            throw new Error('Unhanlded Error');
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
    const reset = useCallback(() => dispatch({ type: 'RESET', initialForm }), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;
