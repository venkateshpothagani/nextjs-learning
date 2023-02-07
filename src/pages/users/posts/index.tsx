import Link from "next/link";

interface Post {
    userId: string;
    id: string;
    title: string;
    body: string;
}

const Posts = (props: { posts: Post[] }) => {
    return (
        <>
            <h1>List of posts</h1>
            {props.posts.map((item, index) => {
                return (
                    <div key={index}>
                        <Link href={`/users/posts/${item.id}`}>
                            <h3>{item.title}</h3>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Generating or Regenerating Page");
    return { props: { posts: data }, revalidate: 10 };
};
