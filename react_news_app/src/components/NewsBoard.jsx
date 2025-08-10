import { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (
          data.articles &&
          Array.isArray(data.articles) &&
          data.articles.length > 0
        ) {
          setArticles(data.articles);
        } else {
          setArticles([]); // Clear old articles
          setError("No news articles found for the selected criteria.");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(
          `Failed to fetch news. Please check your API key or network connection. Error: ${err.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 ">
        American <span className="badge bg-danger">Pulse</span>
      </h2>

      {loading && <p className="text-center">Loading news...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && (
        <div className="row">
          {articles.map((news, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
