import './App.css'
import FormComponent from './components/FormComponent'
import HelloClassComponent from './components/HelloClassComponent'
import HelloFunctionalComponent from './components/HelloFunctionalComponent'
import InputComponent from './components/InputComponent'

function App() {
  return (
    <>
      {/* <HelloClassComponent />
      <HelloFunctionalComponent /> */}
      <FormComponent>
        <form>
          <InputComponent label="Titulo" type="text" />
          <br />
          <br />
          <InputComponent label="Descrição" type="text" />
          <br />
          <br />
          <InputComponent label="Valor" type="number" />
          <br />
          <br />
          <InputComponent label="IMG URL" type="url" />
          <br />
          <br />
          <button>Salvar</button>
        </form>
      </FormComponent>
    </>
  )
}

export default App
