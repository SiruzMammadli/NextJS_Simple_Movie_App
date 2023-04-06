import Movie from "@/components/Movie";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  console.log(data?.results);

  return (
    <div>
      {!data?.results || data?.results.length === 0 ? (
        <div>Tapılmadı!</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data?.results.map((dt, i) => (
            <Movie key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
