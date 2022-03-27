import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
     <React.Fragment>
         <div className="App">
         You're on your own from here! Follow the deliverables; test things out in
         the browser as you write your code; and good luck!
         </div>
         <Header blogName={blogData.name}/>
     </React.Fragment>
  );
}

export default App;
