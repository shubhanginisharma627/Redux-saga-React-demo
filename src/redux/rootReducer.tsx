import { combineReducers} from 'redux'
import cartData from "./reducer"
import productData  from './productReducer'

const rootReducer =combineReducers({cartData,productData})

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer