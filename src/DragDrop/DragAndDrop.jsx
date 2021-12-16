import React, { useState } from "react";
import './DragAndDrop.css';
function DragAndDrop ()  {
    const [cardList, setCardList] = useState([
        {id: 1, order: 1, text: "Карточка 1" },
        {id: 2, order: 2, text: "Карточка 2" },
        {id: 3, order: 3, text: "Карточка 3" },
        {id: 4, order: 4, text: "Карточка 4" },
        {id: 5, order: 5, text: "Карточка 5" },
    ])
    const [currentCard, setCurrentCard] = useState(null)
    function dragStart(e, card) {
        setCurrentCard(card)
    }
    function dragLeave(e) {
        e.target.style.backgroundColor = "white"
    }
    function dragEnd(e) {
        e.target.style.backgroundColor = "white"
    }
    function dragOver(e) {
        e.preventDefault()
        e.target.style.backgroundColor = "teal"
    }
    function dragDrop(e, card) {
        e.preventDefault()
        setCardList(cardList.map(c => {
            if(c.id === card.id) {
                return {...c, order: currentCard.order}
            }
            if (c.id === currentCard.id) {
                return {...c, order:card.order}
            }
            return c
        }))
        e.target.style.backgroundColor = "white"
    }
    const sortCards = (a,b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1 
        }
    }
    return (
        <div className="app">
            {cardList.sort(sortCards).map(card => {
                return <div className="card" 
                draggable={true}
                onDragStart={(e) => {
                    dragStart(e, card)
                }}
                onDragLeave={(e) => {
                    dragLeave(e)
                }}
                onDragEnd={(e) => {
                    dragEnd(e)
                }}
                onDragOver={(e) => {
                    dragOver(e)
                }}
                onDrop={(e) => {
                    dragDrop(e, card)
                }}
                >
                    {card.text}
                </div>
            })}
        </div>
    )
}

export default DragAndDrop