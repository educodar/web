import React from "react"
import ArticleTemplate from "../components/article-template"

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
