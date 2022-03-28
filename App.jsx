import React, { useEffect, useState} from "react";
const App=()=>{
    const [num, setNum] = useState(1)
    useEffect(()=>{
        alert("do not clickplease");   
});
return(
    <button onClick={()=>{
        setNum(num+1);
    }}
    >
    click me{num}
    </button>
);
};
export default App;