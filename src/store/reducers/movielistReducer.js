import { UPDATE_MOVIES } from '../actions/updateMovies'

const movielistReducer = (state = {}, {type, payload}) => {
  switch(type) {
    case UPDATE_MOVIES :
      return payload
    default : 
    return state  
  }
}

export movielistReducer