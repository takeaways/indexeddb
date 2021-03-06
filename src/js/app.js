import { set, get, createStore } from "idb-keyval";
import "./event";
import "../css/app.css";
// import "./creatingAndVersioning";
import "./transactionAndRequests";
(async () => {
  try {
    const st = createStore("myDB", "myStore");
    await set("my_id", Date.now(), st);
    await get("my_id", st);
  } catch (error) {
    console.error(error);
  }
})();
