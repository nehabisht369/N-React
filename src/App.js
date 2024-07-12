import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/* My Food App structure will look like this, 
      1) Header
                - Logo
                - Nav Items(right side)
                - Cart
      2) Body
           - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating     
      3)Footer
                - Links
                - Copyrights
       
*/

const AppLayout = () => {
  return (
    <div class="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
