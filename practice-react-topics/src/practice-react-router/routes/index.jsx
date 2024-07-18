import Layout from '../components/Layout.jsx';
import ErrorPage from '../features/pages/ErrorPage.jsx';

import Home from '../features/pages/Home.jsx';
import About from '../features/pages/About.jsx';
import Terms from '../features/pages/Terms.jsx';

// Product imports.
import ProductCreate from '../features/products/ProductCreate.jsx';
import ProductUpdate from '../features/products/ProductUpdate.jsx';
import ProductList from '../features/products/ProductList.jsx';
import ProductItem from '../features/products/ProductItem.jsx';
import ProductDelete from '../features/products/ProductDelete.jsx';

// Article-query-string imports.
import ArticleCreate from '../features/articles/ArticleCreate.jsx';
import ArticleUpdate from '../features/articles/ArticleUpdate.jsx';
import ArticleList from '../features/articles/ArticleList.jsx';
import ArticleDelete from '../features/articles/ArticleDelete.jsx';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'terms', element: <Terms /> },

    // Products routes
    { path: 'products', children: [
      { index: true, element: <ProductList /> },
      { path: 'create', element: <ProductCreate /> },      
      { path: ':id', element: <ProductItem /> },
      { path: ':id/update', element: <ProductUpdate /> },
      { path: ':id/delete', element: <ProductDelete /> },      
    ]},
    // Articles routes
    { path: 'articles', children: [
      { index: true, element: <ArticleList /> },
      { path: 'create', element: <ArticleCreate /> },      
      { path: 'update', element: <ArticleUpdate /> },
      { path: 'delete', element: <ArticleDelete /> },      
    ]},
  ],
}];

export default routes;
