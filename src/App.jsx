import { useState } from "react";
import Card from "./Card";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({ name: "", lastname: "", genre: "" });
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage("");
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (formData.name.length < 3 || formData.name.startsWith(" ")) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      return;
    }

    if (formData.lastname.length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      return;
    }

    if (formData.genre.length < 3) {
      setErrorMessage("Por favor ingresa un genero de mas de 3 caracteres");
      return;
    }

    if (formData.name && formData.lastname && formData.genre) {
      const newItem = { ...formData };
      setItems([...items, newItem]);
      setFormData({ name: "", lastname: "", genre: "" });
    }
  };

  return (
    <div className="App">
      <h1>Artistas Musicales Favoritos</h1>
      <p>Ingresa tus preferidos</p>
      <form onSubmit={handleAddItem}>
        <div className="formClass">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="genre"
            placeholder="Género Musical"
            value={formData.genre}
            onChange={handleInputChange}
          />
          <button type="submit">Go</button>
        </div>
      </form>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
