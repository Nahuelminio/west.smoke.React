import Header from "./Header";
import { ButtonList } from "./ButtonList";
import { Article } from "./Article";
import data from "../data/data";
import { useState } from "react";
import { Footer } from "./Footer";


const Home = () => {
  const allMarcas = ["Todos", ...new Set(data.map(article => article.marca))];

  const [marcas, setMarcas] = useState(allMarcas);
  const [articles, setArticles] = useState(data);

  const filterMarca = (marca) => {
    if (marca === "Todos") {
      setArticles(data);
      return;
    }
    const filteredData = data.filter(article => article.marca === marca)
    setArticles(filteredData)
  };

  return (
    <div>
      <Header />
      <div className="title">
        <h1> filtro</h1>
      </div>
      <ButtonList marcas={marcas} filterMarca={filterMarca} />
      <Article articles={articles} />
      <Footer />
    </div>
  );
};

export default Home;
