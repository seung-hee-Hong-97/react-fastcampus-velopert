import { createReducer } from 'typesafe-actions';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import { TodosAction, TodosState } from './types';

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => state.concat({ ...action.payload, done: false }),
    [TOGGLE_TODO]: (state, action) =>
        state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, action) => state.filter((todo) => todo.id !== action.payload),
});

export default todos;

// function todos(state: TodosState = initialState, action: TodosAction): TodosState {
//     switch (action.type) {
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false,
//             });
//         case TOGGLE_TODO:
//             return state.map((todo) =>
//                 todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//             );
//         case REMOVE_TODO:
//             return state.filter((todo) => todo.id !== action.payload);
//         default:
//             return state;
//     }
// }
