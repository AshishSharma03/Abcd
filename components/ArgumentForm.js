
import React, { useState } from "react";


function ArgumentForm({argList,setArgList}) {
 
  console.log(argList);
  const handleAddArgument = () => {
    const newArgList = [...argList, { text: "", value: "false" }];
    setArgList(newArgList);
  };

  const handleArgumentChange = (event, index) => {
    const { name, value } = event.target;
    const newArgList = [...argList];
    newArgList[index][name] = value;
    setArgList(newArgList);
  };

  return (
    <div>
      {argList.map((arg, index) => (
        <div key={index}
        className={"ArgumentFormBody"}
        style={{
          border:(argList[index].text != "")?"2px solid #91DC85":"2px solid #FFC5C5",
          boxShadow:(argList[index].text != "")?"none":"0px 0px 50px 1px rgba(255, 142, 142,0.2)"
        }}
        >
          <input
            className={"ArgumentFormInput"}
            type="text"
            placeholder="Enter argument name.."
            name="text"
            value={arg.text}
            onChange={(event) => handleArgumentChange(event, index)}
          />
          <span

          style={{
            padding:"1px",
            borderRadius:"50px",
            background:(argList[index].text != "")?" #91DC85":"#FFC5C5"
          }}
          />
          <select
           className={"ArgumentFormSelect"} 
            name="value"
            value={arg.value}
            onChange={(event) => handleArgumentChange(event, index)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      ))}
      <button
      className="ArgumentFormButton"
      onClick={handleAddArgument}>+ ARGUMENT</button>
    </div>
  );
}

export default ArgumentForm;
