import React from "react";
import './ItemDaLista.css'

export const ItemDaLista = ( {nome ,plataforma}) => {
    return (
        <div className="card flex">
            <img className="card-img" src={plataforma === 'xbox' ? '/assets/xbox.png' :
                plataforma === 'playstation' ? '/assets/playstation.jpg' :
                '/assets/nintendo.jpg'
            } alt={nome} />
            <p>{nome}</p>
        </div>
    )
}