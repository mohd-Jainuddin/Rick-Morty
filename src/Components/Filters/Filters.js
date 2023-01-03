import React from 'react'
import Gender from './Categary/Gender';
import Species from './Categary/Species';
import Status from './Categary/Status';

function Filters({setStatus, setPageNumber, setGender, setSpecies}) {
  let clear = ()=>{
    setStatus(""); 
    setPageNumber(""); 
    setGender(""); 
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      </div>
    </div>
  );
}

export default Filters
