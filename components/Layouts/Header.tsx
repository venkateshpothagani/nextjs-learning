const Header = () => {
    return (
        <>
            <h1>Header Component</h1>
            <div className="row gap-5 px-5">
                <button className="btn btn-primary col">Dashboard</button>
                <button className="btn btn-secondary col">Users</button>
                <div className="col-6"></div>
                <button className="btn btn-outline-primary col">Sign In</button>
                <button className="btn btn-outline-secondary col">Sign Out</button>
            </div>
        </>
    );
};

export default Header;
