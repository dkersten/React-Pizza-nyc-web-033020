import React from "react"

const Pizza = (props) => {

  const { id, topping, size, vegetarian } = props

  const handleClick = (e) => {
    props.formValues(props)
  }
  // console.log(props)

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={handleClick} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
