import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails({ className = "" }) {
  const [libro, setLibro] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    const obtenerLibro = async () => {
      try {
        const respuesta = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setLibro(respuesta.data);
        console.log(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerLibro();
  }, [id]);

  if (!libro) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <p>{libro.volumeInfo.title}</p>
    </div>
  );
}
export default BookDetails;
