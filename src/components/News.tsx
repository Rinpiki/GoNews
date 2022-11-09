/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

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

      const array = apii?.forEach((e: any) => {
        console.log(e.title);
        <div className="flex flex-col w-80 bg-[#303031] p-4 rounded-lg">
          <img
            src={e.urlToImage}
            alt={e.title}
            className=" rounded-lg mb-4 w-full h-auto"
          />
          <h2 className="mb-4">{e.title}</h2>
        </div>;
      });
    };
    api();
  }, [select]);

  return (
    <section
      id="grid"
      className="w-11/12 h-[550px] mx-auto mt-20 mb-10 text-[white] animate-slide transition delay-100 duration-300 ease-in-out"
    >
      {apii?.map((e: any) => (
        <div className="flex flex-col w-80 bg-[#303031] p-4 rounded-lg animate-slide transition delay-100 duration-300 ease-in-out">
          <img
            src={e.urlToImage}
            alt={e.title}
            className=" rounded-lg mb-4 w-full h-32"
          />
          <h2 className="mb-4">{e.title}</h2>
        </div>
      ))}
    </section>
  );
}

export default News;
