export default function logger(reducer) {
  return (prevState, action, args) => {
    console.log("prevState", prevState);
    console.log("Action-agrument", args);
    console.group(action);

    const nextState = reducer(prevState, action, args);
    console.log("nextState", nextState);
    console.groupEnd()
    return nextState;
  };
}
