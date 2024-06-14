// import React, { useEffect, useState } from 'react';
// import "../styles/Listofmovies.css";
// import axios from "axios";

// const Listofmovies = () => {
//     const [MovieData, setMovieData] = useState([]);
//     const [readMore, setReadMore] = useState([]);

//     const toggleReadMore = (index) => {
//         setReadMore((prev) => {
//             const newReadMore = [...prev];
//             newReadMore[index] = !newReadMore[index];
//             return newReadMore;
//         });
//     };

//     useEffect(() => {
//         const fetchMovies = async () => {
//             const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     accept: 'application/json',
//                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTM2MTg4NWU2NDA3ZGUyMmMzZDFhNzdhOGI0MTViNiIsInN1YiI6IjY2NjJhYjdjMTVmNzY4YTAyMGQwMGU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aGn3WuspbTLDqqkWN6_pX2YGDEPjlgRLqHWU_vLvQ4g'
//                 }
//             };

//             try {
//                 const response = await axios.get(url, options);
//                 console.log("RESPONSE", response.data.results);
//                 setMovieData(response.data.results);
//                 setReadMore(new Array(response.data.results.length).fill(false));
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchMovies();
//     }, []);

//     return (
//         <div className='Listofmoviescont'>
//             {MovieData.map((item, index) => (
//                 <div key={index} className='colListofmovies'>
//                     <div style={{ height: "200px", borderRadius: "10px" ,padding:"10px",paddingTop:"15px",paddingBottom:"0px"}}>
//                         <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
//                     </div>
//                     <h1 style={{ textAlign: "center",     fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: "700", margin: "10px 0" }}>{item.title}</h1>
//                     <p style={{
//                         textAlign: "center",
                    
//                         fontSize: "16px",
//                         fontWeight: "400",
//                         margin: "10px 0",
//                         padding: "0 10px",
//                         boxSizing: "border-box",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         display: "-webkit-box",
//                         WebkitLineClamp: 3,
//                         WebkitBoxOrient: "vertical"
//                     }} className={!readMore[index] ? 'text-overflow' : ''}>
//                         {item.overview}
//                         {!readMore[index] && (
//                             <span className="read-more" onClick={() => toggleReadMore(index)}> Read more</span>
//                         )}
//                         {readMore[index] && (
//                             <span className="read-more" onClick={() => toggleReadMore(index)}> Read less</span>
//                         )}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Listofmovies;import React, { useEffect, useState } from 'react';import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import "../styles/Listofmovies.css";
import axios from "axios";


const Listofmovies = () => {
    const [MovieData, setMovieData] = useState([]);
    const [readMore, setReadMore] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
                        const options = {
                            method: 'GET',
                            headers: {
                                accept: 'application/json',
                                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTM2MTg4NWU2NDA3ZGUyMmMzZDFhNzdhOGI0MTViNiIsInN1YiI6IjY2NjJhYjdjMTVmNzY4YTAyMGQwMGU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aGn3WuspbTLDqqkWN6_pX2YGDEPjlgRLqHWU_vLvQ4g'
                            }
                        };
            try {
                const response = await axios.get(url, options);
                console.log("RESPONSE", response.data.results);
                setMovieData(response.data.results);
                setReadMore(new Array(response.data.results.length).fill(false)); // Initialize readMore state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovies();
    }, []);

    // Function to truncate text to 15 words
    const truncateText = (text) => {
        const words = text.split(' ');
        if (words.length > 15) {
            return words.slice(0, 15).join(' ') + '...';
        }
        return text;
    };

    // Function to toggle read more state for a movie at the given index
    const toggleReadMore = (index) => {
        setReadMore((prev) => {
            const newReadMore = [...prev];
            newReadMore[index] = !newReadMore[index];
            return newReadMore;
        });
    };

    return (
        <div className='Listofmoviescont'>
            {MovieData.map((item, index) => (
                <div key={index} className='colListofmovies'>
                    <div style={{ height: "200px", borderRadius: "10px", padding: "10px", paddingTop: "15px", paddingBottom: "0px" }}>
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
                    </div>
                    <h1 style={{ textAlign: "center", fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: "700", margin: "10px 0" }}>{item.title}</h1>
                    <p style={{
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "400",
                        margin: "10px 0",
                        padding: "0 10px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: readMore[index] ? 'unset' : 3,
                        WebkitBoxOrient: "vertical"
                    }} className={!readMore[index] ? 'text-overflow' : ''}>
                        {truncateText(item.overview)}
                        {item.overview.length > 15 && (
                            <span className="read-more" onClick={() => toggleReadMore(index)}>
                                {readMore[index] ? ' Read less' : ' Read more'}
                            </span>
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Listofmovies;
