import { useEffect, useState } from "react";

interface Post {
    userId: string;
    id: string;
    title: string;
    body: string;
}

const Post = (props: { id: number }) => {
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        const response = fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`);
        response
            .then((data) => data.json())
            .then((data) => {
                setPost(data);
            });
    }, [props.id]);

    return (
        <>
            <h1> {post?.title}</h1>
            <p> {post?.body}</p>
        </>
    );
};

export default Post;
