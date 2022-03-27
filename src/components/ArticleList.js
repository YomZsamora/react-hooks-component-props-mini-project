import React from "react";
import Article from "./Article";

function ArticleList({articles}) {

   const blogPosts = articles.map( article => {
      return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
   })

   return (
      <React.Fragment>
         <main>
            {blogPosts}
         </main>
      </React.Fragment>
   )

}

export default ArticleList;