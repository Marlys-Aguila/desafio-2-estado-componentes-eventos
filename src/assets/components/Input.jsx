function Input({ nombre, setNombre, password, setPassword }) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          id="nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default Input;
