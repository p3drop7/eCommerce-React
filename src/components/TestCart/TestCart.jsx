import React, { useContext } from 'react'
import { TestCartContext } from './TestCartContext'

function TestCart() {

    const {testCart} = useContext(TestCartContext)

  return (
    <div>
        <h1>Test Cart</h1>
        {//<button onClick={getTestCart}>BD</button>
        }
        <div>{testCart}</div>
    </div>
  )
}

export default TestCart