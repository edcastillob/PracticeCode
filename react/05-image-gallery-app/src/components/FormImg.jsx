import React from 'react'
import PropTypes from 'prop-types'

const Formimg = ({handleSubmit}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
            {" "}
            <label className='w-75 m-2'>
            <input className= 'form-control' type="text" name='inputText'/>
            </label>

            <button type='submit' className='btn btn-outline-primary'>
            <span>Buscar</span>
            </button>
        </form>
    </>
  )
}

Formimg.propTypes = {
    handleSubmit: PropTypes.func,
}

export default Formimg
