function Card({ image, title, author, className }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">{author}</p>
      </div>
    </div>
  );
}
export default Card;
