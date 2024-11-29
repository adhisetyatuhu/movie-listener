import Search from "./Search";

const Header = () => {
    return (
        <>
            <nav className="row align-items-center my-3">
                <div className="col-12 col-md-6 align-items-center">
                    <h1 className="text-light">MOVIE TIME</h1>
                </div>
                <div className="col-12 col-md-6 align-items-center">
                    <Search placeholder="Search" iconColor="#fff" borderColor="#ddd" />
                </div>
            </nav>
        </>
    );
}

export default Header;