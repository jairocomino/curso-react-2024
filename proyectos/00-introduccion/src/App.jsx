

//Variables globales

import ComponenteProps from "./components/Props/ComponenteProps";
import UseEffectBasic from "./components/UseEffect/GitHubUserCardApi/UseEffectBasic";
import ResizeListener from "./components/UseEffect/GitHubUserCardApi/ResizeListener";
import RegistrarFormulario from "./components/UseState/RegistrarFormulario";
import TodoListTailWind from "./components/UseState/TodoListTailWind";
import GitHubUser from "./components/UseEffect/GitHubUserCardApi/GitHubUser";

const App = () => {

  return (
    <>
      <h1>Ejemplo basico de react</h1>
      <hr />
      {/*}<RegistrarFormulario />
      <TodoListTailWind />
      <ComponenteProps />
      <UseEffectBasic />
       <ResizeListener />
  {*/}
     <GitHubUser />
    </>

  )



}

export default App;