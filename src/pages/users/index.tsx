import { useRouter } from "next/router";

export default function Home(props: any) {
    const router = useRouter();
    return (
        <>
            <h1>Hello world {router.query.name}</h1>
        </>
    );
}
