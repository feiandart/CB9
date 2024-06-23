import { useContext } from "react";
import { context } from "./layouts/DefaultLayout/DefaultLayout";
import Post from "./components/Post/Post";
import "./App.css";
import styles from "./routes/routes.module.scss";
import FakeFriendList from "./components/FakeFriendList/FakeFriendList";

function App() {
  const { post, setProfile } = useContext(context);


  return (
    <>
      <div className={styles.container} >

        <FakeFriendList />
        
        {post.map((post, index) => (
          <Post
            key={index}
            post={post}
            setProfile={setProfile}
          />
        ))}
      </div>
    </>
  );
}

export default App;
