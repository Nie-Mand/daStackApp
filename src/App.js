import { useState } from 'react'
import Card from './Card'
import axios from 'axios'

function App() {

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [techs, setTechs] = useState([])
  const [button, setButton] = useState('Get the Stack')
  const [error, setError] = useState(false)
  
  const handleFetch = async () => {
    if (input) {
      console.log('fetching...')
      setError(false)
      setLoading(true)
      setButton('Fetching')
      await axios.get(`https://dastack.herokuapp.com/stack/${input}`, {timeout: 5000})
        .then(({ data }) => {
          if (!data) setError(true)
          setTechs(data)
        })
        
      setInput('')
      setButton('Get the Stack')
            
    }
}
  
  return (
    <div>
      
      <div className="card mx-auto my-3 p-3" style={{width: "50%"}}>
        <h1 className="text-center" >daStack</h1> 
        {error && (
          <div className="alert alert-danger" >
            there was an error..
          </div>
        )}
        <input 
          value={input} 
          type="text" 
          className="form-control" 
          placeholder="facebook.." 
          onChange={(e) => setInput(e.target.value)}  
          required={true}
        />
        <button 
          className="btn btn-primary mx-auto my-4" 
          onClick={() => handleFetch()}
          disabled={loading}
        >
          {button}
        </button>
      </div>

      <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
      {techs && techs.map(({slug, name, imageUrl, title, category}) => (
        <Card key={slug} src={imageUrl} name={name} title={title} category={category} />
      ))}
      </div>
    </div>
  )
}

export default App
