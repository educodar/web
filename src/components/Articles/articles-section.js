import React from "react"
import ArticleTemplate from "./article-template"
import "./styles.css"

const ArticlesSection = () => (
  <div>
    <ul className="striped-list">
      <li>
        <ArticleTemplate />
      </li>
      <li>
        <ArticleTemplate />
      </li>
      <li>
        <ArticleTemplate />
      </li>
    </ul>
  </div>
)

export default ArticlesSection
