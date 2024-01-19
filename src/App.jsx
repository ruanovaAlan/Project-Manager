import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
}

export default App;
