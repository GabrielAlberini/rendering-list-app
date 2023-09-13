import { useState } from 'react';

const ComponentClick = () => {
  // destructuring
  const [state, setState] = useState(10)

  const hundleStateAdd = () => {
    setState(state + 1)
  }

  const hundleStateSubject = () => {
    setState(state - 1)
  }

 return (
  <section>
    <button onClick={hundleStateAdd}>Sumar</button>
    <p>{state}</p>
    <button onClick={hundleStateSubject}>Restar</button>
  </section>
 )
}

export { ComponentClick }