import React, { useState } from 'react'
import data from './data'
function App() {
	const [count, setCount] = useState(0)
	const [text, setText] = useState([])

	const handleSubmit = e => {
		e.preventDefault()
		setText(data)
	}
	return (
		<>
			<section className="section-center">
				<h3>Zmączony nudnym lorem ipsum?</h3>
				<form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amout">
            Paragrafy:
          </label>
          <input type="number" name='amout' id='amount' value={count} onChange={(e)=>setCount(e.target.value)}/>
          <button type='submit' className='btn'>generuj</button>
        </form>
        <article className='lorem-text'>
          {text.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
        </article>
			</section>
		</>
	)
}

export default App
