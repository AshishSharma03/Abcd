import React, { useState ,useEffect} from "react";
import ArgumentForm from "../../components/ArgumentForm";
import SelectComponent from "../../components/SelectComponent";

function Index () {
  const [argList, setArgList] = useState([{ text: "false", value: "false" }]);
  const [MainResult, setMainResult] = useState();


  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column"
    }}>
      <ArgumentForm argList={argList} setArgList={setArgList}  />
      <SelectComponent argList={argList} setArgList={setArgList} setMainResult={setMainResult} MainResult={MainResult}/>
    <div  style={{position:"absolute",bottom:"0px",padding:"20px"}}>
      <h1 style={{fontFamily:"monospace",color:"#ccc"}}>
      Result : {MainResult?(<span style={{color:(MainResult ==="true")?"green":"red"}}>{MainResult }</span>): 'undefined'}
      </h1>
    </div>
    </div>
  );
};

export default Index