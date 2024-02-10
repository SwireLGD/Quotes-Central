import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import NewQuote from "./Containers/NewQuote/NewQuote";
import { Route, Routes } from "react-router-dom";
import Quotes from "./Containers/Quotes/Quotes";

const App = () => {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container-fluid mt-4 d-flex">
        <aside className="mt-3">
          some links
        </aside>
        <div className="w-75 ms-auto">
          <Routes>
            <Route path="/" element={<Quotes />} />
            <Route path="/new-quote" element={<NewQuote />} />
            <Route path="/quotes/:id/edit" element={<NewQuote />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;