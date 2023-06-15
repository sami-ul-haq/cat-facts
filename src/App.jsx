import React from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, isLoading, error, fetchData } = useFetch(
    "https://catfact.ninja/fact"
  );

  if (isLoading) {
    return <h1 className="w-full h-screen bg-slate-400 flex justify-center items-center text-white font-bold">Loading Fact...</h1>;
  }

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <button className="absolute top-5 sm:top-10 right-10 border-2 px-3 py-2 hover:bg-black hover:text-white">Dark Mode</button>
      <div className="max-w-[1200px] m-auto px-5">
        <div className="border-2 px-5 py-10 bg-emerald-800">
        <div className="text-center">
          <h1 className="font-bold text-white text-3xl sm:text-5xl ">Cat Facts</h1>
          <h2 className="font-semibold py-10 text-white">"{data?.fact}"</h2>
          <button onClick={() => fetchData()} className="border-2 px-3 text-white py-2 font-bold hover:bg-white hover:text-black">
            More Facts
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
