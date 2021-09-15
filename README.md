# indexeddb
Do you know how to use indexeddb? [here for fun](https://takeaways.github.io/indexeddb/)  
![check](/github-assets/images/check.gif)

# Setup
1. make common javascript browser setup and open with live-server
2. open chrome and chrome devtool.
3. go to application and looking for indexedDB

# package we use
1. [idb-keyval go to repo](https://github.com/jakearchibald/idb-keyval)

# try this code
example code 1
```javascript
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
```
![you can see the result of what you type](/github-assets/images/indexeddb.png)

example code 2
```javascript
import {set} from "idb-keyval"
import "../css/app.css"

(async () =>{
  try {
    const mock_user_info_data = {
      id:1004,
      name:'Geonil Jang',
      email:'wkdrjsdlf2@gmail.com'
    }
    await set('info', mock_user_info_data)
    const info = await get('info')
    console.log(info)
  } catch (error) {
    console.error(error)
  }
})()
```
## Base CRUD
```js
//return promise
import { set, get, update, del } from "idb-keyval";
```

## keys, values and entries
```js
//return promise
import { keys, values, entries} from "idb-keyval";
```

## for create custom database and store
```js
import { set, get, createStore } from "idb-keyval";

(async () => {
  try {
    const st = createStore("myDB", "myStore");
    await set("my_id", Date.now(), st);
    await get("my_id", st);
  } catch (error) {
    console.error(error);
  }
})();
```

> service worker can use indexeddb so, I can access same database  from my webpage as well as service worker that is connected my page. That means, if I build progress webapp. I have a place that I can store data.