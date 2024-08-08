import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(["*", "*"]);
  console.log("atualizou o componente", items);
  //criar um estado
  // armazenar um array nesse estado
  // criar um botão
  //quando o botão for clicado, ele vai adicionar mais um item no array
  // quando esse item for adicionado, a tela deve exibir mais uma caixa representando esse item
  //a tela tem que ter o mesmo número de itens que o array

  //setItems([...items, "novovalor"])

  return (
    <>
      <div className="wrapper">
        <div className="onibus">
          {items.map(() => (
            <div></div>
          ))}
        </div>
        <button onClick={() => setItems([...items, "*"])}>adicionar</button>
      </div>
    </>
  );
}

export default App;
