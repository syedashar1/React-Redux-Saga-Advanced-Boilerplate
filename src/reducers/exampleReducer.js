import { fromJS, List } from 'immutable'
import { ITEM } from '../actions/types'

const initialState = fromJS({
  data: new List([]),
  fetching: false,
  success: false,
  error: null,
  counter : 0
})

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM.GET:
    case ITEM.INCREASE:
      console.log('increasing one');
    case ITEM.GET_ONE:
      console.log('getting one');
    case ITEM.SAVE:
    case ITEM.UPDATE:
    case ITEM.DELETE:
    case ITEM.SUCCESS:
    case ITEM.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}
