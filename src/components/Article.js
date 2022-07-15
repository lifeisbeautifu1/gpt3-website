import React from 'react';
import './Article.css';

const Article = ({ image, date, text }) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-img">
        <img src={image} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
