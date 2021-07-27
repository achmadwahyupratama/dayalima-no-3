import {SET_COMMUNITIES, SET_EDUCATIONS, SET_COMPANIES} from './actionType'
import axios from '../config/api'

export function getCompanies(){
  return (dispatch, getState) => {
    axios({
      url: '/companies',
      method: 'get'
    })
      .then(({data}) => {
        dispatch({
          type: SET_COMPANIES,
          payload: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
export function getCommunities(){
  return (dispatch, getState) => {
    axios({
      url: '/communities',
      method: 'get'
    })
      .then(({data}) => {
        dispatch({
          type: SET_COMMUNITIES,
          payload: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
export function getEducations(){
  return (dispatch, getState) => {
    axios({
      url: '/educations',
      method: 'get'
    })
      .then(({data}) => {
        dispatch({
          type: SET_EDUCATIONS,
          payload: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}