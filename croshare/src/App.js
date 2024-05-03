import Home from "./components/Home";
import Account from "./components/account/Account";
import FriendFeed from "./components/friend feed/FriendFeed";
import Pattern from "./components/pattern/Pattern";
import AddPost from "./components/AddPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendPostSelected from "./components/friend feed/FriendPostSelected";
import ReviewsPage from "./components/pattern/ReviewsPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <Account profilePic={"/quinnpfp.jpg"} username={"quinnliu"} />
            }
          />
          <Route path="/friendfeed" element={<FriendFeed />} />
          <Route path="/friendpost" element={<FriendPostSelected />} />
          <Route path="/pattern" element={<Pattern />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/addpost" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
