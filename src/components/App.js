import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
     <React.Fragment>
         <div className="App">
            <Header blogName={blogData.name} />
            <About bio={blogData.about} image={blogData.image} />
            <ArticleList articles={blogData.posts} />
         </div>
     </React.Fragment>
  );
}

export default App;
