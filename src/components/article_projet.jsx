import React from 'react';

export default function Article({ data }) {
    if (!data || data.length === 0) {
        return <p>Aucun article disponible.</p>;
    }

    return (
        <div className="article-container">
            {data.map((article, index) => (
                <div className='div-container' key={article.id || article.title}>
                    <article className={index % 2 !== 0 ? 'row-reverse' : ''} id={article.id}>
                        <img src={article.img} alt={article.alt || "Image"} />
                        <div>
                            <h3>{article.title || "Titre non disponible"}</h3>
                            <p><span>Description : </span>{article.description || "Description non disponible"}</p>
                            <p className='tech'><span>Language : </span>{article.tech || "Technologie non disponible"}</p>
                            <p className='fonctionnalites'><span>Fonctionnalitées : </span>{article.fonctionnalités || "Fonctionnalités non disponibles"}</p>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
}
