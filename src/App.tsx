import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import NewQuote from "./Containers/NewQuote/NewQuote";
import { Route, Routes } from "react-router-dom";
import Quotes from "./Containers/Quotes/Quotes";
import CategoriesNav from "./Components/Categories/Categories";

const App = () => {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container-fluid mt-4 d-flex">
        <CategoriesNav />
        <div className="w-75 ms-auto">
          <Routes>
            <Route path="/" element={<Quotes />} />
            <Route path="/new-quote" element={<NewQuote />} />
            <Route path="/quotes/:id/edit" element={<NewQuote />} />
            <Route path="/quotes/:category" element={<Quotes />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;