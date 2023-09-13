import "./App.css";
import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="App">
      <h1>Olá, Jorge</h1>
      <Comentario
        name="Jorge"
        email="jorge@gmail.com"
        data={new Date(2023, 0, 13)}
      >
        Olá, tudo bem?
      </Comentario>
      <Comentario
        name="Gabe"
        email="gabe@gmail.com"
        data={new Date(2023, 0, 20)}
      >
        Olá, tudo bem?
      </Comentario>
    </div>
  );
}

export default App;
