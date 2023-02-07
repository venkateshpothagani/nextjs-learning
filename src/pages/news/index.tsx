interface News {
    id: number;
    title: string;
    description: string;
    category: string;
}

export default function Home(props: { news: [News] }) {
    console.log(props.news);

    return (
        <>
            <h1>List News Articles</h1>
            {props.news?.map((item, index) => {
                return (
                    <div key={index}>
                        <h5>
                            {item.id} | {item.title} | {item.category}
                        </h5>
                    </div>
                );
            })}
        </>
    );
}

export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:4000/news");
    const data: [News] = await response.json();

    return {
        props: {
            news: data,
        },
    };
};
