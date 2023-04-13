import { configureStore } from "@reduxjs/toolkit"

function reducer (state = 0 , action){
  return state ; 
}

export const store = configureStore(reducer) // créer mon store 
 