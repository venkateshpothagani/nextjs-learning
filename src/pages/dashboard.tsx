import { useEffect, useState } from "react";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState<{ posts: number; comments: number; likes: number; dislikes: number }>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDashboard = async () => {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setDashboard(data);
            setIsLoading(false);
        };

        fetchDashboard();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <h1>Dashboard</h1>
            <h4>posts : {dashboard?.posts} </h4>
            <h4>comments: {dashboard?.comments} </h4>
            <h4>likes: {dashboard?.likes} </h4>
            <h4>dislikes: {dashboard?.dislikes} </h4>
        </>
    );
};

export default Dashboard;
