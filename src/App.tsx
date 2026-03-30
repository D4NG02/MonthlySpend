
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'
import Button from './components/Button'
import Typography from './components/Typography'
import MonthlySpend from './container/MonthlySpend'
import Popper from './components/Popper'
import NewSpend from './container/NewSpend'
import GetSheetToken from './utility/GetSheetToken'

function App() {
  const [newSpendPortal, setNewSpendPortal] = useState<boolean>(false)
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['token'], // Unique key for caching/refetching
    queryFn: GetSheetToken, // Function that returns a promise
  });

  if (isLoading) {console.log(isLoading)};
  if (isError) {console.log(isError, error)};
  if (data) {console.log("Data received:", data)};

  const handleAuthenticate = async () => {
    console.log("Authenticate clicked")
  }

  return (
    <div className="p-4 h-screen grid grid-rows-12 grid-cols-12 gap-4">
      <div className='col-span-full flex justify-between items-center'>
        <Typography variant="h6">Monthly Spend</Typography>
        <div className='inline-flex gap-2'>
          {/* <Button variant="contained" color="primary"
            onClick={handleAuthenticate}>Authenticate</Button> */}
          <Button variant="contained" color="primary"
            onClick={() => setNewSpendPortal(true)}>Add New</Button>
        </div>
      </div>
      <MonthlySpend />


      <Popper open={newSpendPortal} handleClose={() => setNewSpendPortal(false)}>
        <NewSpend handleClose={() => setNewSpendPortal(false)} />
      </Popper>
    </div>
  )
}

export default App
