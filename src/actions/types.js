import { createActionTypes } from '../utils'

export const ITEM = createActionTypes('ITEM', [
  'GET',
  'INCREASE',
  'GET_ONE',
  'SAVE',
  'PUT',
  'PATCH',
  'DELETE',
  'SUCCESS',
  'FAILURE',
])

export default ITEM
