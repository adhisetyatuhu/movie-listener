const SearchIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.height} fill={props.fill}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    );
}

const Search = (props) => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder={props.placeholder} aria-label={props.label} aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{borderColor: props.borderColor}}>
                <SearchIcon height="24px" fill={props.iconColor} />
            </button>
        </div>
    );
}

const Header = () => {
    return (
        <>
            <nav className="row">
                <div className="col-12 col-md-6 align-items-center">
                    MOVIE TIME
                </div>
                <div className="col-12 col-md-6 align-items-center">
                    <Search placeholder="Search" iconColor="#777" borderColor="#ddd" />
                </div>
            </nav>
        </>
    );
}

export default Header;