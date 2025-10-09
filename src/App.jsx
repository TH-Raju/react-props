import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const data = {
    img: "https://imag.jpg",
    title: "Product Name 1",
    price: "5000",
    ratings: "5.5",
  };

  return (
    <>
      <Card cardData={data} />
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
