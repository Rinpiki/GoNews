/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import noimg from '../img/noimg.png';

function News({ input, select }: any) {
  let appp: any = [1, 2];
  const [apii, setApii] = React.useState(appp);

  useEffect(() => {
    const sele = select;

    const api = async () => {
      const dados = await fetch(
        `https://newsapi.org/v2/top-headlines?country=br&category=${sele}&apiKey=8425dcd380824eeb99bbf40e8ccb3287`
      );

      const ibge = await dados.json();
      console.log(ibge.articles);
      appp = ibge.articles;
      setApii(ibge.articles);
    };
    api();
  }, [select]);

  useEffect(() => {
    if (input.length > 1) {
      const sele = input;

      const api = async () => {
        const dados = await fetch(
          `https://newsapi.org/v2/everything?q=${sele}&apiKey=8425dcd380824eeb99bbf40e8ccb3287`
        );

        const ibge = await dados.json();
        console.log(ibge.articles);
        appp = ibge.articles;
        setApii(ibge.articles);
      };
      api();
    }
  }, [input]);

  return (
    <section
      id="grid"
      className="w-11/12  mx-auto mt-20 mb-10  text-[white] animate-slide transition delay-100 duration-300 ease-in-out"
    >
      {apii?.map((e: any, i: any) => (
        <div
          key={i}
          className="flex flex-col w-80 h-72  p-4 rounded-lg bg-[#132F4C] animate-slide transition delay-100 duration-300 ease-in-out"
        >
          <img
            src={e.urlToImage?.length > 7 ? e.urlToImage : noimg}
            alt={e.title}
            className=" rounded-lg mb-4 w-full h-32 bg-slate-400"
          />
          <a href={e.url} className="mb-4">
            {e.title?.slice(0, 72)}
            ...
          </a>
          <p className="text-sm absolute bottom-2">
            {e.publishedAt?.slice(11, 16)}
          </p>
        </div>
      ))}
    </section>
  );
}

export default News;
