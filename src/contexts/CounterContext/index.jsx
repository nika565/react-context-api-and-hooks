import P from 'prop-types'
import { createContext, useContext, useReducer, useRef } from "react"
import { reducer } from './reducer'
import { buildActions } from './build-actions'

// Esatdo inicial
export const initialState = {
    counter: 0,
    loading: false,
    error: false
}

const Context = createContext()

// Meu componente de contexto
export const CounterContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const actions = useRef(buildActions(dispatch))

    return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>
}

CounterContextProvider.propTypes = {
    children: P.node.isRequired
}

// Hook personalizado para usar o contexto
export const useCounterContext = () => {
    const context = useContext(Context)

    if (typeof context === 'undefined') throw new Error('You have to use useCounterContext inside <CounterContextProvider />')

    return [...context]
}