import Folder from "./components/Folder";
import { projectData } from "./projectData";

function App() {
  return (
    <div className="flex flex-col gap-1">
      <Folder data={projectData} classes="" />
    </div>
  );
}

export default App;
