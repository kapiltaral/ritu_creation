import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom';

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

function SingleView() {

    const { id } = useParams();
    const card = data[id]

    if (!card) {
        return <h2>Data not found</h2>;
    }

    return (
        <>
            <Navbar />
            {/* <div style={{ padding: '20px' }}>
                <h1>Single View Page</h1>
                <p>This is the single view content.</p>
            </div> */}
           <Link className='btn btn-secondary m-2' to={"/"}>← Back</Link>
            <div className="container mt-5 mb-5 d-flex justify-content-center">
                <div className="card" style={{ width: "100%" }}>
                    <img src={card.image} className="card-img-top" alt={card.title} />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SingleView