// 액션 타입 2개 선언하기
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성함수
let nextId = 1;
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

// 초기 상태 정의하기
const initialState = [
    /*
        🤷‍♂️ 데이터 예시
        {
            id: 1,
            text: '리덕스 배우기',
            done: false,
        },
    */
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        default:
            return state;
    }
}
