# indexeddb
Do you know how to use indexeddb?

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
import { set, get, update, del } from "idb-keyval";
```

## keys, values and entries
```js
import { keys, values, entries} from "idb-keyval";
```