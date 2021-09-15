import {set} from "idb-keyval"
import "../css/app.css"

(async () =>{
  try {
    await set('user_id', Date.now())
    console.log("save user id")
  } catch (error) {
    console.error(error)
  }
})()