import { OptionIcon } from "../../../../public/icons/Post";
import { Link } from'react-router-dom';

function PostOptionContainer() {

    function handleClick() {
        console.log('Rohinth');
    }

    return (
        <>
        <div className="clicked-post-option-container">
            
            <div><button className="first-button"><span>Report</span></button></div>
            <div><button><Link>Go to post</Link></button></div>
            <div><button><span>Share to</span></button></div>
            <div><button><span>Copy link</span></button></div>
            <div><button><span>About this account</span></button></div>
            <div><button className="last-button"><span>Cancel</span></button></div>
        </div>
            <div onClick={handleClick} >
                <OptionIcon />
            </div>
        </>
    )
}


export { PostOptionContainer };