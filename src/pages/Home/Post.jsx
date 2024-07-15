import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CommentPostIcon, LikePostIcon, OptionIcon, SavePostIcon, SendPostIcon } from "../../../public/icons/Post";
import { PostOptionContainer } from "./components/PostComonents";


function Post() {
    return (
        <div className="post-main-container">
            <div className="post-header-container">
                <div className="post-header-left-side">
                    <div className="story-pic-border">
                        <div className="story-profile-pic-container WH-38">
                            <FaUser style={{color:"white", width:'72%', height:'72%'}} />
                        </div>
                    </div>
                    <div className="post-header-acoount-name-container">
                        <Link className="post-header-account-name">marvelworld.in</Link>
                    </div>
                </div>
                <div className="post-header-right-side">
                    <PostOptionContainer />
                </div>
            </div>
            <div className="post-image-container">
                <img className="post-image" src="post1.jpg" />
            </div>
            <div className="post-operations-container HORI-PAD-16">
                <div className="post-operations-left-side">
                    <div><LikePostIcon /></div>
                    <div><CommentPostIcon /></div>
                    <div><SendPostIcon /></div>
                </div>
                <div className="post-operations-right-side">
                    <div><SavePostIcon /></div>
                </div>
            </div>
            <div className="post-likes-count-container HORI-PAD-16">
                <span className="post-likes-count">50,333 likes</span>
            </div>
            <div className="post-caption-container HORI-PAD-16">
                <span className="post-caption">
                    <b>marvelworld.in </b>
                    The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.
                </span>
            </div>
            <div className="post-caption-more-button-container HORI-PAD-16">
                <button className="post-caption-more-button">more...</button>
            </div>
            
            <div className="post-comments-count-container HORI-PAD-16">
                <span className="post-comments-count">View all 106 comments</span>
            </div>
            <div className="post-time-container HORI-PAD-16">
                <span className="post-time">2 days ago</span>
            </div>
        </div>
    )
}

export default Post;