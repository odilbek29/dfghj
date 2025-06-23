import  './uszercard.css'

function Uzercard(props) {
    
  return (
    <div>
      <div className="uszer-card">
        <div className="container">
          <div className="ota">
            <div className="card">
                <img src="1.png" alt="efv" />
                <h2>{props.ism}</h2>
                <p> {props.kasbi}</p> <br />
                <p>{props.joy} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uzercard
