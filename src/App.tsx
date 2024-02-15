import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  return (
    <>
      <FunctionalComponent subTitle="Prima invocazione" color="red" />
      <FunctionalComponent subTitle="Prima invocazione" />
      <ClassComponent subTitle="Prima invocazione" color="red" />
      <ClassComponent subTitle="Seconda invocazione" />
    </>
  )
}

export default App
