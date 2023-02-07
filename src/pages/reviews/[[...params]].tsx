import { useRouter } from "next/router";

const Docs = () => {
    const router = useRouter();
    console.log(router.query);

    return <>hello world</>;
};

export default Docs;
