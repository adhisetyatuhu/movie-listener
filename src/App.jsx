import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'
import Detail from './pages/Detail'
import Error from './pages/Error'

function App() {
  const [page, setPage] = useState("detail");  // home | search
  let pageView;

  switch(page) {
    case "home":
      pageView = <Home />;
      break;
    case "search":
      pageView = <SearchResult keyword="Some Keyword" />;
      break;
    case "detail":
      pageView = <Detail />;
      break;
    case "error":
      pageView = <Error />;
      break;
  }

  return (
    <>
      <div className='px-6 md:container md:mx-auto md:px-20 lg:px-6'>
        <Header />
        {pageView}
      </div>
    </>
  )
}

export default App
