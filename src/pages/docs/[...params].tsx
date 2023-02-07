import { useRouter } from "next/router";

const Docs = () => {
    const router = useRouter();
    console.log(router.query);

    return <h1>Welcome to docs page</h1>;
};

export default Docs;
