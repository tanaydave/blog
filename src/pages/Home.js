import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
const Home = (isAuth) => {
  const [postLists, setPostsLists] = useState([])
  const postsCollectionRef = collection(db, "posts");



  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc);
  }

 { useEffect(() => {
    const getPosts = async () => {
      var data = await getDocs(postsCollectionRef);
      setPostsLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts()
  }, []
  )
  console.log(auth)
  return (
    <div className="homePage">{postLists.map((post) => {
      return (
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1> {post.title}</h1>
            </div>
            <div className="deletePost">
              {
                (isAuth && auth.currentUser && post.author.id === auth.currentUser.uid) ? (
                  <button className="deBtn"
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>

                ) : null
              


              }

              {/* {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )} */}
                
            </div>
          </div>
          <div className="postTextContainer"> {post.postText} </div>
          <h3 className="postAuthor">@{post.author.name}</h3>
        </div>
        
      )
    


    })}</div>
  )
 }
}
export default Home;
