import React, { useState, useEffect } from "react";
import './Found.css'
import NavComp from '../Components/NavComp'
function Found() {
  const [jobs, setJobs] = useState([]);
  const [page,setPage]=useState(1)
  const fetchData=(pageNumber)=> {
    fetch(`https://www.themuse.com/api/public/jobs?category=Computer%20and%20IT&page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => setJobs(data.results) )
      .catch((error) => console.log(error));
  }

    const listeJob=jobs.map((job) => (
      <div key={job.id} className="fetchRes">
        <h2>{job.name}</h2>
        <h4>Company :{job.company.name}</h4>
        <p>Level : {job.levels[0].name} </p>
      </div>
    ))

  return (
    <div className="d-flex align-center jcc dc fetchOverall">
      <NavComp ></NavComp>
      <h1>Fetch Results</h1>
      <div className="fetchContainer">
          {listeJob}
      </div>
    </div>
  );
}

export default Found;
