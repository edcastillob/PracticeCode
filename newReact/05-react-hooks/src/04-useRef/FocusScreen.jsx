import { useRef } from "react"




export const FocusScreen = () => {

    const inputRef = useRef(); 

    const onClickFocus = () => { 
        inputRef.current.select();
 }

  return (
  <>
  <h1>Focus screen</h1>
  <hr />
  <input type="text"
  className="form-control"
  placeholder="Enter your name"
  ref={ inputRef }
  />
  <button className="btn btn-primarybtn btn-outline-primary mt-3"
  onClick={ onClickFocus }
  >
    Set Focus
    </button>
  </>
  )
}
