/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Form from './Form';
import News from './News';

function Filter() {
  const [option, setOption] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [select, setSelect] = React.useState('business');
  const [ponte, setPonte] = React.useState('');

  useEffect(() => {}, [select]);

  const toggle = (e: any) => {
    e.preventDefault();
    setOption(!option);
  };

  const click = (e: any) => {
    e.preventDefault();
    console.log(input);
    setPonte(input);
  };

  return (
    <>
      <Form
        toggle={toggle}
        option={option}
        click={click}
        input={input}
        setInput={setInput}
        select={select}
        setSelect={setSelect}
      />
      <News input={ponte} select={select} />
    </>
  );
}

export default Filter;
