import React from 'react';

const Article = ({ author, title, body }) => {

    const style = {
        fontSize: 22,
        marginBottom: 20,
    }

    return (
        <article style={style}>
            <h4 style={{
                fontSize: 18,
                textTransform: "uppercase",
            }}>{title}</h4>
            <small style={{
                fontSize: 12,
                color: "gray",
            }}>{author}</small>
            <p style={{
                fontSize: 15
            }}>{body}</p>
        </article>
    );

}

export default Article;