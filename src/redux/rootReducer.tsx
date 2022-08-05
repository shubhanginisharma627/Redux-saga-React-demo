import { combineReducers} from 'redux'
import cartData from "./reducer"


const rootReducer =combineReducers({cartData})

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer