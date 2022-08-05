import {createStore} from 'redux'
import {IRootState} from './rootReducer'
import rootReducer from './rootReducer'
const store = createStore(rootReducer)

export default store