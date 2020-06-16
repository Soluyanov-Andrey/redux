import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {




  render() {
      console.log('APP',this.props);
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return{
       counter: state.counter
  }
}

function mapDispatchToProps(dispatch){

    return{
        onAdd: ()=>dispatch({type:'ADD'}),
        onSub: ()=>dispatch({type:'SUB'}),

    }
}

// мы вызываем функцию она нам вернет новую функцию и в нее мы уже кладем компонент с которым мы хотим работать
export default connect(mapStateToProps,mapDispatchToProps)(App)
