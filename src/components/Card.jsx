import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {

    const navigate = useNavigate()

  return (
    <div className="card me-3 mb-3" style={{"min-width":"17rem"}}>
        <img src="https://imgs.search.brave.com/Wfh4oyxVd-3eiZnWedvoR-Wd1thIMK3M2Qj_MI_14Z8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzA1Lzk0Lzgy/LzM2MF9GXzE0MDU5/NDgyNDFfdVpOSWV4/MWNOWndjRzY1c3Fp/WGl1TktVUG9laXZ3/Vm8uanBn" class="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title mb-5 text-center">Card title</h5>
            <div className='w-100 mx-auto'>
                <button className='btn btn-primary me-5 ms-2'>More info!</button>
                <button className='btn btn-primary'>Favorite</button>
            </div>
            
        </div>
    </div>
  )
}

export default Card
