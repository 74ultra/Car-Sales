const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
    { id: 5, name: "Backup camera", price: 400 },
    { id: 6, name: "Lowered suspension", price: 700 },
    { id: 7, name: "Premium rims", price: 600 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "REMOVE_FEATURE":
          return {
              ...state,
              car: {
                  ...state.car,
                  price: state.car.price - action.payload.price,
                  features: state.car.features.filter(item => {
                      return item.id !== action.payload.id
                  })
              }
          }
    case "BUY_FEATURE":
      if (state.car.features.find(item => item.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price + action.payload.price,
            features: [...state.car.features, action.payload]
          }
        };
      }

    default:
      return state;
  }
};

export default reducer;
