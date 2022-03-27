import React from "react";

function About({bio, image}) {
   return (
      <React.Fragment>
         <aside>
            {image ? <img src={image} alt="blog logo" /> : <img src="https://via.placeholder.com/215" alt="blog logo" />}
            <p>{bio}</p>
         </aside>
      </React.Fragment>
   )
}

export default About;