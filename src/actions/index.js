let nextItem=0
export const addTodo=text=>{
  console.log("add to do action activated~");
  return {
    type:'ADD_TODO',
    id:nextItem++,
    text
  }
}
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
