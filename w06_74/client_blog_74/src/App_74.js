import { BrowserRouter,
   Routes, Route } from 
   "react-router-dom";

import BlogStaticPage_74
 from "./pages/BlogStaticPage_74";
import BlogNodeSever_74
 from "./pages/BlogNodeSever_74";

const App_74 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/static_74'
       element=
      {<BlogStaticPage_74/>}/>

      <Route path ='/node_74'
       element=
      {<BlogNodeSever_74/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App_74;
