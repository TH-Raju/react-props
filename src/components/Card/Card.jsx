import "./Card.css";

const Card = (cardData) => {
  const { img, title, price, ratings } = cardData.cardData;
  //   console.log(cardData);
  return (
    <div>
      <h1 className="image">Image src= {img}</h1>
      <p>Text {title}</p>
      <p>Price {price}</p>
      <p>ratings {ratings}</p>
    </div>
  );
};

export default Card;
