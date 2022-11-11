import React, {useState} from 'react';
import userFetchjobs from './userFetchjobs';
import { Container } from 'react-bootstrap';

import Job from './Job';
import Pagin from './Pagin'
import SearchForm from './SearchForm';



function App() {
  const [params,setParams]=useState({})
  const [page,setPage] = useState(1) 
  const { jobs, loading, error, hasNextPage} = userFetchjobs(params,page)

  function handleParamChange(e){
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]:value}
    })
  }


    return(

        <Container className="my-4">
          <h1 className="mb-4">Job Search Board</h1>
          <SearchForm params={params} onParamsChange ={handleParamChange}/>
          <Pagin page={page} setPage={setPage} hasNextPage={hasNextPage}/>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error.Try refreshing</h1>}
          {jobs.map(job => {
            return <Job Key = {job.id} job={job}/>
          })}
          <Pagin page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        </Container>

      )
  }

export default App;
