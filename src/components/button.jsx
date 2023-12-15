import refresh  from '../assets/images/refresh 1.png'

function Button({counter, setCounter}) {
   
   
    const plus = () => {
        setCounter(counter + 1)
    }
    const minus = () => {
        setCounter(counter - 1)
    }
    const restart = () => {
        setCounter(0)
    }




    return (
        <div className="button">
            <div className="button-plus">
           <button className="btn-plus" onClick={plus}>
                +
           </button>
        </div>
            <button className="restart" onClick={restart}>

            <img src={refresh} alt="" />
            
            </button>
           
             <div className="button-minus">
                <button className="btn-minus" onClick={minus}>
                    -
                </button>
             </div> 
        </div>
    );
}

export default Button;