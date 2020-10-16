import React, { useState } from 'react';

function TodoList() {
    // Criando estados para armazenar: 
    // a lista de To-Do's e o título da nova tarefa inserida  

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // Acrescentando novas tarefas
    function handleAddTodo(e) {
        e.preventDefault();
        setTodos([...todos, { id: todos.length + 1, title: input, }]);
        setInput('');
    }

    // Deletando tarefas
    function handleDeleteTodo(id) {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    // Marcando tarefa como completa
    function handleCompleteTodo(id) {
        document.getElementById(id).setAttribute("class", "written");
    };

    return (
        <>
            <div className="list-wrap">
                <div className="lines"><div className="title"><span>Tarefas</span> </div>
                    <ul className="list">
                        <li><input type="checkbox" checked ></input> Finalizar desafio </li>
                        <li><input type="checkbox" checked ></input> Publicar no GitHub </li>
                        {todos.map(todo => (
                            <li key={todo.id}>
                                <input type="checkbox" /> <span className="write" id={todo.id}> {todo.title} </span>
                                <div className="button-wrap">
                                    <button onClick={() => handleDeleteTodo(todo.id)}> excluir </button>
                                    <button onClick={() => handleCompleteTodo(todo.id)}> completar </button>
                                </div>
                            </li>))}
                        <div className="form-wrap">
                            <input className="form"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                type="text"
                                name="todo"
                                id="title"
                                placeholder="Digite a nova tarefa"
                            />
                            <button onClick={handleAddTodo}>Adicionar</button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TodoList;