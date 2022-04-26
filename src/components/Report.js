import React,{useState, useEffect} from 'react';
import http from '../http-common'

const Report = ()=>{

useEffect(async()=>{

await getReport()
},[])

const [result ,setResult] = useState({})

const getReport=async()=>{
let results = await http.get("/showresult");
console.log("Result",results.data)
setResult(results.data)

}

return (
    <p>{result.map(x=>x.report)}</p>
)




}


export default Report