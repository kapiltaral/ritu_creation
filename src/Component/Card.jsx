import React from "react";
import { Link } from "react-router-dom";

function Card() {
  const data = [
    {
      image: "/images/image1.jpg",
      title: "Card 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
    {
      image: "/images/image2.jpg",
      title: "Card 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
    {
      image: "/images/image3.jpg",
      title: "Card 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
    {
      image: "/images/image7.jpg",
      title: "Card 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
    {
      image: "/images/image9.jpg",
      title: "Card 5",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
    {
      image: "/images/image6.jpg",
      title: "Card 6",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
    {
      image: "/images/image7.jpg",
      title: "Card 7",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
    {
      image: "/images/image8.jpg",
      title: "Card 8",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      button: "Go somewhere",
    },
  ];

  return (
    <div className="d-flex flex-wrap gap-3">
      {data.map((item, index) => (
        <div className="card" style={{ width: "18rem", }} key={index}>
          <img src={item.image} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
            <Link to={`/view/${index}`} className="btn btn-danger">
              {item.button}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
