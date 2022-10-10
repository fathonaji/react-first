import React, {useState, useEffect} from "react";

const Component = props => {

  let [counter, setCounter] = useState(0);

  useEffect(() => {
     setCounter(counter + 1);
  }, [counter]);

  return <div>
   {counter}
  </div>

}

export default Component