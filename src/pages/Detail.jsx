import Card from "../components/Card";

const Genre = ({children}) => {
    return (
        <>
            <button className="py-0.5 px-4 border bg-black/10 rounded-xl hover:bg-white/30 active:bg-black/30">{children}</button>
        </>
    );
}

function Cast({name, character}) {
    return (
        <>
            <div className="h-[17rem]">
                <div className="relative overflow-hidden rounded-lg h-[15rem] w-[12rem] bg-slate-600/30">
                    <figure className="bg-[#fff]/30 peer h-[15rem]">
                        {/* <img className="hover:opacity-50 hover:cursor-pointer active:opacity-100 duration-100 transition-all" src={posterUrl} /> */}
                    </figure>
                    <figcaption className="absolute w-[12rem] duration-100 transition-all peer-hover:bg-black/20 peer-active:bg-black/70 py-2 rounded-b-lg bottom-0 left-1/2 -translate-x-1/2 text-white text-xs text-center bg-black/70 hover:cursor-pointer hover:underline">
                        {name}<span className="block">as {character}</span>
                    </figcaption>
                </div>
            </div>
        </>
    );
}

const MovieOverview = () => {
    
    return (
        <>
            <div className="my-8">
                <div className="relative" style={{"backgroundImage": "url('https://image.tmdb.org/t/p/original/zZDkgOmFMVYpGAkR9Tkxw0CRnxX.jpg')"}}>
                    <div>

                        <figure className="h-[28rem] bg-black/85 flex items-end flex-wrap lg:flex-nowrap">
                            <img className="h-96 my-8 rounded-lg border border-white/50 mx-auto" src="https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
                            
                            <div className="my-8 lg:px-8 text-white">
                                <h2 className="text-3xl font-bold mb-2">Star Wars</h2>
                                
                                {/* rating */}
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <p className="ms-2 text-sm font-bold text-white-900">8.2</p>
                                    <span className="w-1 h-1 mx-1.5 bg-white rounded-full"></span>
                                    <a href="#" className="text-sm font-medium text-white-900 underline hover:no-underline">20578 voters</a>
                                </div>
                                {/* end rating */}

                                <p className="my-6">Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.</p>
                                <div className="flex gap-2">
                                    <Genre>Adventure</Genre>
                                    <Genre>Action</Genre>
                                    <Genre>Science Fiction</Genre>
                                </div>
                            </div>
                            <div className="my-8 flex gap-16 md:gap-48 lg:gap-0 lg:flex-col">
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold">Status</p>
                                        <p>Released</p>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-bold">Language</p>
                                        <p>English</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold">Budget</p>
                                        <p>$1,1000,000.00</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Revenue</p>
                                        <p>$775,398,007.00</p>
                                    </div>
                                </div>
                            </div>
                        </figure>

                    </div>
                </div>
                
                <h2 className="text-3xl font-bold mt-8 mb-4">Casts</h2>
                <div className="flex gap-2 overflow-scroll hide-scrollbar">
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                    <Cast name="John Doe" character="James Bon" />
                </div>
            </div>
        </>
    );
}

const Detail = () => {
    return (
        <>
            <MovieOverview />
        </>
    );
}

export default Detail;