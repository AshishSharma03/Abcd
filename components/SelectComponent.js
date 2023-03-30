import React, { useState ,useEffect} from "react";


function SelectComponent({argList,setArgList,setMainResult,MainResult}) {
  const [value, setValue] = useState("Select");
  const [components, setComponents] = useState([]);
  const [Result, setResult] = useState("false");
  const [ResultArg, setResultArg] = useState(0);
  console.log(MainResult)

  useEffect(() => {
    if(value === 'constant'){
      setMainResult(Result)
    }
 

    if(value === 'select...'){
      setMainResult(null)
    }

    

  },);


  
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClicked = () => {
    setValue("Select");
  };


  const handleAddComponent = () => {
    setComponents([...components,  <SelectComponent key={""}  argList={argList}/>]);
  };

  const handleOnResult = (e) => {
    setResult(e.target.value)
  }

  let inputElement;
   if (value === "and" || value === "or") {
    inputElement = 
    <div className="SelectComponentselectnewComp">
    <SelectComponent argList={argList} setArgList={setArgList} setMainResult={setMainResult} MainResult={MainResult}/>
    <SelectComponent argList={argList} setArgList={setArgList} setMainResult={setMainResult} MainResult={MainResult}/>
    {components}
    <button onClick={handleAddComponent} className="SelectComponentAddOP">Add Op</button>
    </div>;
  }

  return (
    <div className="SelectComponentBody">

         {
          (value === "constant")?
          <select value={Result}  className= "SelectComponentselect"  onChange={handleOnResult}>
          <option value="true">true</option>
            <option value="false">false</option>
          </select>
            :
            <select value={value} className= "SelectComponentselect"  onChange={handleValueChange}>
            <option value="Select">Select...</option>
            <option value="constant">Constant</option>
            <option value="argument">Argument</option>
            <option value="and">And</option>
            <option value="or">Or</option>
            </select>
        }

      <button  className= "SelectComponentCloseButtom" onClick={handleButtonClicked}>X</button>
     
    {
          (value === "argument")?
          <div >
          <select className="SelectComponentselectArg" style={{marginLeft:"50px"}} value={ResultArg} onChange={(e)=>{setResultArg(Number(e.target.value))}}>
          {argList?.map((a,i)=>{
            return(<option key={i} value={i}>{a.text}</option>)
          })}
          </select>
          </div>
            :   
            ""
        }

      {inputElement}

     <div>
      
        

    </div> 
    </div>
  );
}

export default SelectComponent;
 