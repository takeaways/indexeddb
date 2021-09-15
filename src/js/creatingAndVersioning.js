const IDB = (() => {
  let db = null;
  let objectStore = null;
  let DBOpenReq = indexedDB.open("MyDatabase", 1); // create how to database without library

  DBOpenReq.addEventListener("error", (error) => {
    // Error ocurred while trying to open DB
    console.log(error);
  });

  DBOpenReq.addEventListener("success", (e) => {
    // DB has been opened after upgradeneeded
    db = e.target.result;
    console.log("success", db);
  });
  DBOpenReq.addEventListener("upgradeneeded", (e) => {
    // first time opening this DB
    // Or a new version was passed into open()
    db = e.target.result;
    console.log("success", db);
  });
})();
