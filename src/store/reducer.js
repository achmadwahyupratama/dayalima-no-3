import {SET_COMMUNITIES, SET_EDUCATIONS, SET_COMPANIES} from './actionType'

const initialState = {
  companies: [],
  communities: [],
  educations: []
}

function reducer (state=initialState, action) {
  switch (action.type) {
    case SET_COMPANIES:
      return {...state, companies: action.payload}
    case SET_COMMUNITIES:
      return {...state, communities: action.payload}
    case SET_EDUCATIONS:
      return {...state, educations: action.payload}
    default:
      return state
  }
}

export default reducer