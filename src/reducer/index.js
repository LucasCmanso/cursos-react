import React, { useState, useEffect } from 'react';
import useStore from './somaReducer';

function ReducerHooks() {

  const [ numero, setNumero ] = useState();
  const [ segundoNumero, setSegundoNumero ] = useState();
  const [ store, dispatch ] = useStore();

  const somar = () => {
    dispatch({
        type: 'SOMA',
        payload: +numero + +segundoNumero
    })
  }

  const subtrair = () => {
    dispatch({
      type: 'SUBTRAIR',
      payload: +numero - +segundoNumero
  })
  }

  useEffect(() => {
    console.log(`Numero: ${numero}`)
  }, [numero])

  return (
    <div className="App">
      Numero 1: <br/>
      <input type="text" value={numero} onChange={ e => setNumero(e.target.value) } /><br/>
      Numero 2: <br/>
      <input type="text" value={segundoNumero} onChange={ e => setSegundoNumero(e.target.value) } /> <br/>

      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button> <br/>

      Resultado: <br/>
      <input type="text" value={store.resultado} />
    </div>
  );
}

export default ReducerHooks;
