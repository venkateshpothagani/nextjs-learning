import { useRouter } from "next/router";

const User = () => {
    const router = useRouter();
    console.log(router);

    return (
        <>
            hello world {router.query.name}={router.query.id}
        </>
    );
};

export default User;
