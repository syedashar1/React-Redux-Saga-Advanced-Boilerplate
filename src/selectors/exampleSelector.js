import { createSelector } from 'reselect'

const exampleState = state => state.get('exampleData')


const exampleCounter = createSelector(
  exampleState,
  state => {
    const data = state.get('counter')

    return data
  },
)

const exampleDataSelector = createSelector(
  exampleState,
  state => {
    const data = state.get('data')

    return data
  },
)

const fetchingSelector = createSelector(
  exampleState,
  state => state.get('fetching'),
)

const errorSelector = createSelector(
  exampleState,
  state => {
    const error = state.get('error')

    return error
  },
)
export {
  exampleDataSelector,
  fetchingSelector,
  errorSelector,
  exampleCounter
}
