import "../App.css";

export const Names = (props) => {
  const img = props.img;
  const title = props.title;
  const desc = props.desc;

  return (
    <div className="names">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
