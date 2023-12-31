import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_xx from './pages/HomePage_xx';

import MenuNodePage_74 from './pages/mid2_74/MenuNodePage_74';
import ShopStaticPage_xx from './pages/midp_xx/ShopStaticPage_xx';
import ShopLocalJsonPage_xx from './pages/midp_xx/ShopLocalJsonPage_xx';
import ShopNodePage_xx from './pages/midp_xx/ShopNodePage_xx';
import MenuByCategoryNodePage_74 from './pages/mid2_74/MenuByCategoryNodePage_74';

import BlogStaticPage_xx from './pages/BlogStaticPage_xx';
import BlogNodeServer_xx from './pages/BlogNodeServer_xx';
import BlogLocalJson_xx from './pages/BlogLocalJson_xx';

const App_xx = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_xx />} />
        <Route path='/mid2_node_74' element={<MenuNodePage_74 />} />
        <Route path='/midp_static_xx' element={<ShopStaticPage_xx />} />
        <Route path='/midp_localjson_xx' element={<ShopLocalJsonPage_xx />} />
        <Route path='/midp_node_xx' element={<ShopNodePage_xx />} />
        <Route path='/static_xx' element={<BlogStaticPage_xx />} />
        <Route path='/node_xx' element={<BlogNodeServer_xx />} />
        <Route path='/local_xx' element={<BlogLocalJson_xx />} />
        <Route path='/mid2_cat_node_74' element={<MenuByCategoryNodePage_74 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_xx;
