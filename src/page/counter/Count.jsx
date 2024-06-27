import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount, increment, decrement, selectValue } from '../../redux/features/counter/counterSlice'
import {Button} from 'flowbite-react'

function Count(){
    const dispatch = useDispatch()
  const [amount, setAmount] = useState(10);
  //useSelector is a hook of Redux
  const countValue = useSelector(selectValue)
  return (
    <>
    <h1 className='text-blue-800 text-3xl font-bold text-center mt-5'>First Day learning Redux Toolkit</h1>
    <h2 className='text-blue-800 text-3xl font-bold text-center mt-5'>{countValue}</h2>
    <div className="flex flex-wrap gap-2 justify-center mt-5">
      <Button onClick = {() => dispatch(increment())} color="purple">
        Increase By 1
      </Button>
      <Button onClick = {() => dispatch(decrement())} color="pink">
        Decrease By 1
      </Button>
      <Button onClick = {() => dispatch(incrementByAmount(amount))} color="blue">
        Increase By AMount
      </Button>
      </div>
    </>
  )
}
export default Count;