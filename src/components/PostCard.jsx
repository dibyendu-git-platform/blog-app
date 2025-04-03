import { Link } from "react-router"
import appwriteService from "../appwrite/config"
import { useEffect, useState } from "react";

function PostCard({$id, title, blogImage}) {
    const [postImage, setPostImage] = useState(null);

    useEffect(() => {
        appwriteService.getFilePreview(blogImage).then((url) => {
        setPostImage(url.href);
        })
        .catch((error) => {
            console.error("Error fetching image:", error);
        });
    }, [blogImage]);
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justify-center mb-4'>
                  <img src={postImage} alt={title}
                  className='rounded-xl' />
  
              </div>
              <h2
              className='text-xl font-bold'
              >{title}</h2>
          </div>
      </Link>
    )
  }
  
  
  export default PostCard