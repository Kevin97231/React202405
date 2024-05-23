import { useState } from "react";

export const useIncrement = ({initialValue = 0, max = Infinity, min = -Infinity}) => {
  const [state, setState] = useState(initialValue);

  const functionIcrement = () => setState(prev => prev < max ? prev + 1 : prev)
  const functionDecrement = () => setState(prev => prev > min ? prev - 1 : prev)

//   return [state, functionIcrement, functionDecrement]

return {
    count: state,
    increment: functionIcrement,
    decrement: functionDecrement
}

};
