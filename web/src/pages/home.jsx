import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const obtenerLibros = async () => {
      const url =
        "https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=8";
      try {
        const respuesta = await axios.get(url);
        setLibros(respuesta.data.items);
        console.log(respuesta.data.items);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };

    obtenerLibros();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "60px",
      }}
    >
      {libros.map((libro) => (
        <Link to={`/book-details/${libro.id}`} key={libro.id}>
          <div
            style={{
              height: "300px",
              backgroundColor: "#f9f9f9",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {libro.volumeInfo.title || "Título no disponible"}
            </h3>
            <img
              src={
                libro.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/128x193"
              }
              alt={libro.volumeInfo.title || "Sin título"}
              style={{
                width: "80%",
                height: "200px",
                marginBottom: "10px",
                objectFit: "contain",
                borderRadius: "5px",
              }}
            />
            <p
              style={{   
                fontSize: "0.9rem",
                color: "#555",
              }}
            >
              {libro.volumeInfo.authors?.join(", ") || "Autor desconocido"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
