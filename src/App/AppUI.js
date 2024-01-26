import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import React from 'react'
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';


function AppUI(){ 
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
    
    return (
        //className es de JSX no de HTML
        //Aqui se pone React.fragment
          <> 
       {/* Aqui retornamos un componente dentro de otro componente de React */}
      
          <TodoCounter />
          <TodoSearch  />
              <TodoList>
              {loading && (
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                </>
              )}
                  
                  {error && <TodosError />}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
    
                  {searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed} 
                      onComplete={()=>completeTodo(todo.text)}
                      onDelete={()=>deleteTodo(todo.text)}
                      />
                  ))}
                </TodoList>
            
          
                <CreateTodoButton
                  setOpenModal={setOpenModal}
                />
          {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
          </>
        );
}

export {AppUI

}