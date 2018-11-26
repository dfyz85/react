import React from 'react';
import Article from '../Article';
import './style.css';

export default function ArticleList ( {articles} ){
  const articleList = articles.map(article => 
      <li key = {article.id} className="article-list_li">
        <Article article = {article} />
      </li>
    )
  return(
    <ul>
      {articleList}
    </ul>
  )

}