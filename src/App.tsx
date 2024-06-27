import React from "react";
import { TUser } from "./types/TUser";
import { getUsers } from "./utils/getUsers";
import Popover from "./components/Popover/Popover";
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
      <Popover>
        <Popover.Button>Popover!</Popover.Button>
        <Popover.List>
          {data.map((x) => (
            <Popover.ListItem key={x.firstname}>
              {x.firstname} {x.lastname}
            </Popover.ListItem>
          ))}
        </Popover.List>
      </Popover>
    </div>
  );
}

export default App;
