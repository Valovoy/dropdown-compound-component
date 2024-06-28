import React from "react";
import { TUser } from "./types/TUser";
import { getUsers } from "./utils/getUsers";
import DropDown from "./ui/DropDown/DropDown";

import "./App.scss";

function App() {
  const [data, setData] = React.useState<TUser[]>([]);

  const applyData = React.useCallback(async () => {
    const data = await getUsers();

    setData(data);
  }, []);

  React.useEffect(() => {
    applyData();
  }, [applyData]);

  return (
    <div className="App">
      <DropDown>
        <DropDown.Button>DropDown!</DropDown.Button>
        <DropDown.List>
          {data.map((x) => (
            <DropDown.ListItem key={x.firstname}>
              {x.firstname} {x.lastname}
            </DropDown.ListItem>
          ))}
        </DropDown.List>
      </DropDown>
    </div>
  );
}

export default App;
