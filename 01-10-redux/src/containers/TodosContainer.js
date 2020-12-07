import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer(
    {
        /* 
            🤷‍♂️
            Props로 가져올 필요는 없다 
            왜? 리덕스를 쓰고 있잖아...
        */
    }
) {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
