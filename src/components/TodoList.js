import React from 'react';
import TodoItem from './TodoItem';
import Todo from './Todo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo } from '../redux/action';
const TodoList = () => {
    const state = useSelector((state) => ({ ...state.todos }));
    let dispatch = useDispatch();
    return (
        <div className='TodoList'>
            <h1>Todo Application</h1>
            <TodoItem />
            <ul>
                <TransitionGroup className="todo-list">
                    {state.todos &&
                        state.todos.map((todo) => {
                            return (
                                <CSSTransition key={todo.id} classNames="todo">
                                    <Todo
                                        key={todo.id}
                                        id={todo.id}
                                        task={todo.task}
                                        completed={todo.completed}
                                        toggleTodo={() => dispatch(completeTodo(todo))}
                                    />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </ul>
        </div>
    );
};

export default TodoList;