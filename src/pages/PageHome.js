import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        "id": 1,
        "author": "John",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "id": 2,
        "author": "Mike",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "id": 3,
        "author": "Frank Castle",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
]

const PageHome = () => {

    const articlesList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div>
            <h1>Witaj na stronie głównej</h1>
            {articlesList}
        </div>
    );
}

export default PageHome;