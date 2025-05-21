import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import PostList from "./Components/PostList";
import PostListProvider from "./Store/post-list-store";
function App() {
  const [SelectedTab, SetSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          SelectedTab={SelectedTab}
          SetSelectedTab={SetSelectedTab}
        ></Sidebar>

        <div className="content">
          <Header></Header>
          {SelectedTab === "home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
