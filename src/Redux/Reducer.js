const InitialState = [
    {
      id: 1,
      name: "sufiyan shaikh",
      number : '9689499541',
      email: 'shaikhsufiyan174@gmail.com',
    },
    {
        id: 2,
        name: "test name",
        number : '7820924353',
      email: 'shaikhtest577@gmail.com',
    },
];

const contactNumber = (state = InitialState, action) => {
   switch(action.type) {
    case "ADDCONTACT" : 
    state = [...state, action.payload];
    return state;

    case "UPDATECONTACT" : 
     const update = state.map((item) => item.id === action.payload.id ? action.payload : item);
     state = update;
     return state;

     case "DELETECONTACT" : 
      const filter = state.filter((item) => item.id !== action.payload && item);
      state = filter;
      return state;
    default : return state;
   }
};

export default contactNumber; 
