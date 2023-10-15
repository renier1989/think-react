import { PRODUCTS } from './api'
import {FiterTableProduct} from './components/FilterTableProducts'

function App() {

  return (
    <div className='flex items-center justify-center w-full'>
      <FiterTableProduct products={PRODUCTS}/>
    </div>
  )
}

export default App
 