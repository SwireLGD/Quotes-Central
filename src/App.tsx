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
      <main className="container-fluid mt-4">
        <aside>
          <Routes>
            <Route path="/" element={<Quotes />} />
            <Route path="/new-quote" element={<NewQuote />} />
          </Routes>
        </aside>
        <div>

        </div>
      </main>
    </>
  );
};

export default App;