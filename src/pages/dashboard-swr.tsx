import useSWR from "swr";

import { useEffect, useState } from "react";

const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    return await response.json();
};

const DashboardSWR = () => {
    const { data, error } = useSWR("dashboard", fetcher);

    if (error) return <h1>Error Occurred</h1>;
    if (!data) return <h1>Loading...</h1>;

    return (
        <>
            <h1>Dashboard</h1>
            <h4>posts : {data?.posts} </h4>
            <h4>comments: {data?.comments} </h4>
            <h4>likes: {data?.likes} </h4>
            <h4>dislikes: {data?.dislikes} </h4>
        </>
    );
};

export default DashboardSWR;
