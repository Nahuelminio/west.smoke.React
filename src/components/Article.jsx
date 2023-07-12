import React from "react";
import "../style/article.css";

export const Article = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div className="descartables" key={article.id}>
          <div className="img-container">
            <img
              className="img"
              src={`../assets/${article.image}`}
              alt={article.name}
            />
          </div>
          <div className="art">
            <h2>{article.name}</h2>
            <h3 className="h2-article">{article.sabor}</h3>
            <h3>{article.puff}</h3>
          </div>
         
        </div>
      ))}
    </div>
  );
};
