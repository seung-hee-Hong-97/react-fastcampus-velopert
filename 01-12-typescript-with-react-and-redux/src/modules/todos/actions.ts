import { createAction } from 'typesafe-actions';

let nextId = 1;

export const ADD_TODO = 'todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text,
    },
});

/*
- createAction 을 사용하는 또 다른 방법. 그러나 코드가 길어져서 잘 사용하지 않음.
    export const addTodo = createAction(ADD_TODO, (action) => (text: string) =>
        action({
            id: nextId++,
            text,
        })
    );
*/

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
