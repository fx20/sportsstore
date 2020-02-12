const isPromise = payload =>
  (typeof payload == "object" || typeof payload === "function") &&
  typeof payload.then === "function";

const AsyncAction = () => next => action => {
  if (isPromise(action.payload)) {
    action.payload.then(result => next({...action, payload: result}));
  }
};

export default AsyncAction;
