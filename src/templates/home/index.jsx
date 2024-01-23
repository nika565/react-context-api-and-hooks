
import { useEffect, } from 'react'
import { useCounterContext } from '../../contexts/CounterContext'
import { Button } from '../../components/Button/index'
import './styles.css'
import { Heading } from '../../components/Heading'

export const Home = () => {

  const [state, actions] = useCounterContext()


  return (

    <div>
      <Heading text={state.counter} />

      <Button onButtonClick={actions.increase}>increase</Button>
      <Button onButtonClick={actions.decrease}>decrease</Button>
      <Button onButtonClick={actions.reset}>reset</Button>
      <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set 10</Button>
      <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>set 100</Button>
      <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>async increase</Button>
      <Button disabled={state.loading} onButtonClick={actions.asyncError}>async error</Button>


    </div>

  )

}
export default Home