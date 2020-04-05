import React from 'react';
import Layout from './components/Layout';
import Content from './views';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Content/>
        </Layout>
      </BrowserRouter>
  );
}

export default App;