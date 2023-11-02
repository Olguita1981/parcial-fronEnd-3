//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import "./index.css";

function Card(props) {
  const { item } = props;
  return (
    <div className="card">
      <p>
        Tu artista favorito es:{" "} 
        <b>
          {item?.name} {item?.lastname}
        </b>{" "}
        e interpreta el género musical:{" "}
        <b>
          {item?.genre}
        </b>{" "}
      </p>
      <img
        src={'https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_640.png'}
        alt={item?.name + " " + item?.lastname}
        className="image"
      />
    </div>
  );
}

export default Card;
