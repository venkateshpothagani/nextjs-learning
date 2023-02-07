// import { useRouter } from "next/router";
// import PostComponent from "../../../../components/post/index";

interface Post {
    userId: string;
    id: string;
    title: string;
    body: string;
}

const Post = (props: { post: Post }) => {
    // const router = useRouter();
    // const getId = (value: any) => {
    //     if (!value) {
    //         return 1;
    //     }
    //     if (typeof value !== typeof "") {
    //         return 1;
    //     }
    //     return parseInt(value);
    // };
    // const id = getId(router.query.id);
    // return (
    //     <>
    //         <PostComponent id={id} />
    //     </>
    // );

    return (
        <>
            <h1
                style={{
                    color: "blue",
                }}
            >
                {props.post.title}
            </h1>
            <h3
                style={{
                    color: "green",
                }}
            >
                {props.post.body}
            </h3>
        </>
    );
};

export default Post;

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const paths = data.map((post: Post) => {
        return {
            params: {
                id: `${post.id}`,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: { params: any }) => {
    const { params } = context;
    console.log("Generating or Regenerating Page");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
    const data = await response.json();

    return {
        props: { post: data },
        revalidate: 10,
    };
};
