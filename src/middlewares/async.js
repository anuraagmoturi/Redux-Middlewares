export default function ({dispatch}) {
  return next => action => {
    //if action doesn't have payload or it doesn't have .then
    if(!action.payload || !action.payload.then){
      return next(action);
    }

    //Make sure the action's promise resolves

    action.payload
        .then(function(response) {
          const newAction = {...action, payload: response};
          dispatch(newAction);
        });

  }
}