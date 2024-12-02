import { useNavigate } from "react-router-dom";

const SearchIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.height} fill={props.fill}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    );
}

const Search = (props) => {
    const navigate = useNavigate();

    const goToSearchResult = (keyword) => {
        navigate(`/search/${keyword}`);
    }

    return (
        <div className="flex">
            <input id="search-input" type="text" className="w-full rounded-l-md py-1 pl-2 text-black/80 focus:outline-none focus:shadow-[inset_0.15em_0.15em_0.15em_rgba(0,0,0,0.5)] focus:bg-cyan-50" placeholder={props.placeholder} aria-label={props.label} aria-describedby="button-addon2" />
            <button onClick={() => goToSearchResult("coba")} className="rounded-r-md border-solid border-2 py-1 px-2 hover:bg-white/20" type="button" id="search-btn" style={{borderColor: props.borderColor}}>
                <SearchIcon height="24px" fill={props.iconColor} />
            </button>
        </div>
    );
}

export default Search;