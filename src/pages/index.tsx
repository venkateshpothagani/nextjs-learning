import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
    let users = [];
    for (let i = 0; i < 10; i++) {
        users.push(
            <>
                <Link href={"/users/" + (i + 1)}>User {i + 1}</Link> <br />
            </>
        );
    }

    const [isEmpty, setIsEmpty] = useState(false);
    const [page, setPage] = useState("");

    const router = useRouter();

    const goToDocs = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        console.log("GO TO DOCS PAGE");
        if (isEmpty) {
            router.push("/docs/" + page);
        }
    };

    const updatePage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(event.target.value);
        if (event.target.value === "") {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    };

    return (
        <>
            <Link href={"/users"} replace>
                User
            </Link>{" "}
            <br />
            {...users}
            <input
                type={"text"}
                placeholder="Enter docs directory"
                style={isEmpty ? { border: "4px solid red" } : { border: "1px solid black" }}
                onChange={updatePage}
            />
            <div style={isEmpty ? { display: "block" } : { display: "none" }}>
                <span style={isEmpty ? { color: "red" } : { color: "green" }}>docs directory can not be empty</span>
            </div>
            <button onClick={goToDocs}>Go to docs</button>
        </>
    );
}
