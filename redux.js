//redux это некоторая идеалогия на которой мы формируем некую модель данных на фронтэнде
//импортируем redux
const redux = require('redux')

const initialState = {
  counter: 0
}
//это некая javscript функция которая делает некие приобразования
//Reducer
const reducer = (state = initialState, action) => {

  if (action.type === 'ADD') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.value
    }
  }

  return state

}
// то место где хранятся все данные
// Store
const store = redux.createStore(reducer)

store.subscribe(() => {
  console.log('Subscribe', store.getState())
})

// Actions
//у экшенов обезательное првило должно быть поле type
const addCounter = {
  type: 'ADD'
}

store.dispatch(addCounter)

store.dispatch({ type: 'SUB' })

store.dispatch({ type: 'ADD_NUMBER', value: 10 })
