import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
//doubt
let AddTodo=({dispatch})=>{
  let input
  return (
    <div>
    <form onSubmit={e=>{
        e.preventDefault()
      if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
    }}>
    <input
        ref={node => {
          input = node
        }}
      />
      <button type="submit">
        Add Todo
      </button>
      </form>
    </div>
  )
}
//console.log(connect(AddTodo));
AddTodo=connect()(AddTodo);
export default AddTodo
