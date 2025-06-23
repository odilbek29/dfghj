import  './infocard.css'

function Infocard(props) {
  return (
    <div>
      
      <div className="ya">
        <div className="container">
        <div className="card3">
          <img src="2.png" alt="dfb" />
          <h2>{props.nome}</h2>
          <p>{props.malumot}</p>
          <button className='btn'>Read now</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Infocard
