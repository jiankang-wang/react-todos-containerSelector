import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../action/index'
import TodoList from '../components/TodoList.js'
import { getVisibleTodos } from '../selectors/index'

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id)) ,
  fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)