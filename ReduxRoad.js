// Initial State and Reducer

const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 30,
  }
  
  const reducer = (state = initialWagonState, action) => {
    switch (action.type){
      case 'gather': {
        return {
          ...state, 
          supplies: state.supplies + 15,
          days: state.days + 1,
        }
      }
      case 'travel': {
        /*const remSupp = state.supplies - (20*action.payload);*/
        if (state.supplies - (20*action.payload) <= 0) {
          return state
          }
          return {
          ...state,
          supplies: state.supplies - (20*action.payload),
          distance: state.distance + (10*action.payload),
          days: state.days + action.payload,
          }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1,
        }
      }
      case 'sell': {
        return {
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash + 5,
           }
        }
  
        case 'buy': {
          return {
            ...state,
            supplies: state.supplies + 25,
            cash: state.cash - 15,
          }
        }
  
        case 'theft': {
          return{
            ...state,
            cash: state.cash / 2
          }
        }
      default: return state;
    }
  };
  
  //Calling reducers to copy and edit the state
  
  let wagon = initialWagonState;
  wagon = reducer(undefined, {});
  console.log(wagon); //Prints: { supplies: 100, distance: 0, days: 0 }
  
  const actionGather = {
    type: 'gather'
  };
  
  wagon = reducer(wagon, actionGather);
  console.log(wagon);
  
  
  const actionTravel = {
    type: 'travel',
    payload: 2,
  };
  
  wagon = reducer(wagon, actionTravel);
  console.log(wagon);
  
  
  const actionTippedWagon = {
    type: 'tippedWagon',
  };
  
  wagon = reducer(wagon, actionTippedWagon);
  console.log(wagon);
  
  
  const actionBuy = {
    type: 'buy',
  };
  wagon = reducer(wagon, actionBuy);
  console.log(wagon);
  
  
  const actionSell = {
    type: 'sell',
  };
  
  wagon = reducer(wagon, actionSell);
  console.log(wagon);
  
  
  const actionTheft = {
    type: 'theft',
  };
  
  wagon = reducer(wagon, actionTheft);
  console.log(wagon);
  
  