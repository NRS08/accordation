import React from 'react'

export default function Alert(props) {

  const upper = (word)=>{
      const letter = word.toLowerCase();
      return letter.charAt(0).toUpperCase() + letter.slice(1);
  }
  return (
    <div className="divv" style={{height : '50px'}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.tp} alert-dismissible fade show`} role="alert">
        <strong>{upper(props.alert.tp)}</strong> : {props.alert.msg}
    </div>
    </div>}
    </div>
  )
}
