
import { useEffect, useState } from 'react'


const GetJobs = () => {
  const [lavori, setLavori] = useState([])
  
  const [error, setError] = useState(null)

const handleClick = (url) => {
    window.open(url); 
  }

  useEffect(() => {
    
    
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=All`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Errore nel caricamento dei lavori')
        }
        return res.json()
      })
      .then((data) => {
        console.log('lavoro', data)
        setLavori(data.data || [])
       
      })
      .catch((err) => {
        console.error('errore', err)
        setError(err.message)
        
      })
  }, [])

  return (
    <ul className="list-group list-unstyled">
         <li><h3 className="list-group-item d-flex justify-content-between align-items-start">Altre offerte di lavoro per te</h3></li>
      {lavori.map((item, index) => (
        
        <li
          key={item.id || index}
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div style={{cursor:"pointer"}} onClick={() => handleClick(item.url)}>
            <strong className="fs-5 text-primary ">{item.title}</strong> -{' '}
            {item.category}
            <br />
            <div className="mt-2 ">
              {item.company_name && (
                <span className=" fw-bold me-2">{item.company_name}</span>
              )}
              {item.job_type && (
                <span className="me-2">{item.job_type}</span>
              )}
              {item.candidate_required_location && (
                <span className="badge bg-info me-2">
                  {item.candidate_required_location}
                </span>
              )}
            </div>
            {item.salary && (
              <div className="mt-2">
                <small className="text-muted">Salary: {item.salary}</small>
              </div>
            )}
            <small className="text-muted">
              {new Date(item.publication_date).toLocaleDateString('it-IT')}
            </small>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default GetJobs