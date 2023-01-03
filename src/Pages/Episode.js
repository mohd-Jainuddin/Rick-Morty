import React, {useState, useEffect} from 'react'
import Cards from '../Components/Cards/Cards';
import InputGroup from '../Components/Filters/Categary/InputGroup';

const Episode = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setresults] = useState([])
  let {air_date, name} = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setInfo(data)
      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setresults(a);
    })()
  },[api])

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode name :{" "}
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}{" "}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup setId={setId} name="Episode" total={50}/>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/episode/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode