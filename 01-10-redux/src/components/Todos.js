import React, { useState } from 'react';

/* 🎫 할 일의 목록에서 하나의 아이템 */
function TodoItem({ todo, onToggle }) {
    return (
        <li
            style={{
                textDecoration: todo.done ? 'line-through' : 'none',
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
}

/* 🎫 할 일의 목록을 보여주는 컴포넌트 */
function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
}

/* 🎫 할 일의 목록과 할일을 등록할 수 있는 텍스트 컴포넌트를 보여주는 총괄 컴포넌트 */
function Todos({ todos, onCreate, onToggle }) {
    /*
        🤷‍♂️ 가장 심각한 오해 
        리덕스를 사용해야 한다고 해서 모든 상태를 리덕스 스토어에서 관리해야 하는 것은 아니다.
    */
    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder='할 일을 입력하세요' />
                <button type='submit'>등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default Todos;
