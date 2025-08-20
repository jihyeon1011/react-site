import React, { useEffect, useState } from 'react';

const ExUseEffect04 = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        //fetch API
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])
    return (
        <div>
            <h3>게시글 목록</h3>
            <hr />
            <ul>
                {
                    posts.map((p) => (
                        <li key={p.id}>
                            {p.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ExUseEffect04;