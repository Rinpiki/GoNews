/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Form from './Form';

function Filter() {
  const [option, setOption] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [select, setSelect] = React.useState('economia');

  useEffect(() => {
    console.log(select);
  }, [select]);

  const toggle = (e: any) => {
    e.preventDefault();
    setOption(!option);
  };

  const click = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <Form
      toggle={toggle}
      option={option}
      click={click}
      input={input}
      setInput={setInput}
      select={select}
      setSelect={setSelect}
    />
  );
}

export default Filter;
