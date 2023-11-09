import React, { useState } from "react";
import './ListaDosJogos.css'
import { ItemDaLista } from "../ItemDaLista/ItemDaLista";
import jogosExclusivos from "../Dados/Dados";

export default function ListaDosJogos() {
    const [listaJogos, setListaJogos] = useState(jogosExclusivos)
    const [textoBusca, setTextoBusca] = useState('')
    const handleFiltrarJogosPlataforma = (plat) => {
        setListaJogos(jogosExclusivos.filter((jogo) => jogo.plataforma === plat))
        setTextoBusca('')
    }
    const limparBusca = () => {
        setListaJogos(jogosExclusivos)
        setTextoBusca('')
    }

    const handleBuscarJogo = (textoDigitado) => {
        setTextoBusca(textoDigitado)
        setListaJogos(jogosExclusivos.filter((jogo) =>
            jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase()))
        );
    };
    return (
        <main className='flex main'>
            <div className='limita-largura'>
                <h1>Lista de jogos exclusivos</h1>
                <div className='botoes flex'>
                    <div className='primeiros-tres-botoes flex'>
                        <button onClick={() => handleFiltrarJogosPlataforma('xbox')} className='xbox-button'>XBOX</button>
                        <button onClick={() => handleFiltrarJogosPlataforma('nintendo')} className='nintendo-button'>NINTENDO</button>
                        <button onClick={() => handleFiltrarJogosPlataforma('playstation')} className='play-button'>PLAYSTATION</button>
                    </div>
                    <button onClick={limparBusca} className='limpar'>Limpar Busca</button>
                </div>
                <div className="input-icon flex">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        value={textoBusca}
                        onChange={(event) => handleBuscarJogo(event.target.value)}
                        placeholder="Pesquise um jogo ou plataforma"
                    />
                </div>
                <div className="lista-itens-container flex">
                    {listaJogos.map((jogo) => (
                        <ItemDaLista
                            key={jogo.id}
                            nome={jogo.nome}
                            plataforma={jogo.plataforma}
                        />
                    ))
                    }
                </div>
            </div>
        </main>
    )
}