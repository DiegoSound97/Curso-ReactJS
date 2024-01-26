import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() { // Esto es un componente de React
/*  Ojo con la A mayusucla de App eso idnica que es un componente
 de react */
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>

  )
}

export default App;
