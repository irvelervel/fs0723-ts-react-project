import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FunctionalComponent subTitle="Prima invocazione" color="red" />
              <FunctionalComponent subTitle="Prima invocazione" />
            </>
          }
        />
        <Route path="/form" element={<FormComponent />} />
        <Route
          path="/class"
          element={
            <>
              <ClassComponent subTitle="Prima invocazione" color="red" />
              <ClassComponent subTitle="Seconda invocazione" />
            </>
          }
        />
        <Route path="/books" element={<FetchComponent />} />
        <Route
          path="*"
          element={
            <div>
              <h2>404 - Page not found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
