import React from "react";

function Header({blogName}) {
   return (
      <React.Fragment>
         <header>
            <h1>{blogName}</h1>
         </header>
      </React.Fragment>
   )

}

export default Header;