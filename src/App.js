import Boton from "./assets/components/Boton";
import Input from "./assets/components/Input";
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const validarNombre = (evento) => {
    evento.preventDefault();
    if (nombre === "") {
      setError(true);
      return;
    }
  };

  return (
    <div className="d-flex flex-column align-items-center vh-100">
      <div className="bg-dark text-light m-5 pb-4 pt-2 rounded-4 max-width">
        <h3 className="text-info text-center pt-2">
          Desafío "Estado de los componentes y eventos"
        </h3>

        {error ? <p className="error">*El nombre es obligatorio</p> : null}

        <form className="container form-group" onSubmit={validarNombre}>
          <Input
            nombre={nombre}
            setNombre={setNombre}
            password={password}
            setPassword={setPassword}
          />

          {password === "252525" ? <Boton /> : null}
        </form>
      </div>
    </div>
  );
}

export default App;
