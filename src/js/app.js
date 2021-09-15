import { set, get, update, del } from "idb-keyval";
import "../css/app.css";

(async () => {
  try {
    await set("user_id", Date.now());

    const mock_user_info_data = {
      id: 1004,
      name: "Geonil Jang",
      email: "wkdrjsdlf2@gmail.com",
    };

    await set("info", mock_user_info_data);
    const info = await get("info");
    console.log(info);

    await update("user_id", () => "UPUP");

    await set("dd", "delete gogo");

    del("dd");
  } catch (error) {
    console.log("------");
    console.error(error);
  }
})();
