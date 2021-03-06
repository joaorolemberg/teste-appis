import React from 'react';
import './Card.css'

const PromotionCard = ({promotion}) =>(
    <div className ="promotion-card">
        <img className ="promotion-card__image" alt ={promotion.title} src={promotion.imageUrl}/>
        <div className ="promotion-card__info">
            <h1 className ="promotion-card__title"> {promotion.title}</h1>
            <span className ="promotion-card__price">R$ {promotion.price}</span>
            <footer className ="promotion-card__footer">
                
                {promotion.comments.length>0 && (<div className ="promotion-card__comment">"{promotion.comments[0].comment}"</div>) }
                
                <div className ="promotion-card__commentsCount">
                    {promotion.comments.length} {""}
                    {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
                </div>
                <a className ="promotion-card__url" href={promotion.url} target= "_blank" rel="noreferrer">Ir para oferta</a>
            </footer>
        </div>
        
       
    </div>
)
   

export default PromotionCard;