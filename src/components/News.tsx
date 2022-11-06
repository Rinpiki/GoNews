import React from 'react';

function News({ input, select }: any) {
  return (
    <section className="w-11/12 h-[550px] border mx-auto mt-20 mb-10 text-[white]">
      <h1>{input}</h1>
      <h2>{select}</h2>
    </section>
  );
}

export default News;
