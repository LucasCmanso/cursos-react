import React, { useState } from 'react';

function UseState() {

  const [ numero, setNumero ] = useState();
  const [ segundoNumero, setSegundoNumero ] = useState();
  const [ resultado, setResultado ] = useState();

  const somar = () => {
    setResultado(+numero + +segundoNumero);
  }

  return (
    <div className="App">
      Numero 1: <br/>
      <input type="text" value={numero} onChange={ e => setNumero(e.target.value) } /><br/>
      Numero 2: <br/>
      <input type="text" value={segundoNumero} onChange={ e => setSegundoNumero(e.target.value) } /> <br/>

      <button onClick={somar}>Somar</button> <br/>

      Resultado: <br/>
      <input type="text" value={resultado} />
    </div>
  );
}

export default App;
