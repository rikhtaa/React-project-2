
import Nav from "./components/Nav/Nav.jsx"
import  "./App.css"
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx"
import Form from "./components/Form/Form.jsx"
function App() {
  return (
    <div className="container">
    <Nav/>
    <main className="main_container">
    <ContactHeader/>
    <Form/>
    </main>
    </div>
  )
}

export default App
