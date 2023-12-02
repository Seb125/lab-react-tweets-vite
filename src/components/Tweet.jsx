import Image from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
import { v4 as uuidv4 } from 'uuid';

function Tweet({tweets}) {
  
  console.log(tweets)
  const renderedTweets = tweets.map(tweet => (
    <div className="tweet" key={uuidv4()}>
      <div className="tweet">
        <Image url={{url: tweet.user.image}}/>
  
        <div className="body">
          <div className="top">
            <User user={tweet.user} />
            <Timestamp tweet={tweet} />
           
          </div>
  
          <Message tweet={tweet} />
          
  
          <Actions />
        </div>
  
        <i className="fas fa-ellipsis-h"></i>
      </div>
      </div>
  ))

console.log(renderedTweets[0])

  return <>
    {renderedTweets}
  </>
  
  }


export default Tweet;
