import image from "../assets/news.jpg";

// To display each article card
export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) + "..." : "No Title Available"}
        </h5>
        <p className="card-text">
          {description
            ? description.length > 90
              ? description.slice(0, 90) + "..."
              : description
            : "We couldn't find a summary for this article — read it in full here."}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
