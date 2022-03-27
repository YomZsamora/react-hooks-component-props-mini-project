import React from "react";
import Article from "./Article";

function ArticleList(props) {

   console.log("Article List:");
   console.log(props.posts);

   const blogPosts = props.posts.map( article => {
      return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
   })

   return (
         <main>
            {blogPosts}
         </main>
   )

}

export default ArticleList;