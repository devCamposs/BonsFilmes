import PropType from 'prop-types'
import React from 'react'

function Title(props){
  return(
    <h1 className={props.class}>{props.title}</h1>
  )
}
Title.propType = {
  title: PropType.string,
  class: PropType.string 
}

export default Title
