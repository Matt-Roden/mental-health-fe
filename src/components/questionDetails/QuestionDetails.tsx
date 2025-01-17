import { UserDetails } from "../../interfaces";
import {QuestionDetailsObject} from '../../interfaces';
import NewComment from '../newComment/NewComment'
import CommentsContainer from '../../containers/commentsContainer/CommentsContainer';
import Header from '../header/Header';
import '../../styles/questionDetails.scss'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import UpVote from '../UpVote/UpVote';
import DownVote from '../DownVote/DownVote';
import React from 'react';

interface QuestionDetailsProps {
  questionDetails: QuestionDetailsObject;
  addComment: ({}) => void | any;
  user: UserDetails;
  addQuestionVote: ({}) => void;
  addResponseVote: ({}) => void;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  
  const packageQuestionUpVote = () => {
    return {
      user: 1,
      post: props.questionDetails.id,
      vote_type: 1
    }
  }

  const packageQuestionDownVote = () => {
    return {
      user: 1,
      post: props.questionDetails.id,
      vote_type: 2
    }
  }

  const questionUpVote = (event: React.FormEvent) => {
    event.preventDefault()
    const questionUpVote = packageQuestionUpVote()
    props.addQuestionVote(questionUpVote)
  }

  const questionDownVote = (event: React.FormEvent) => {
    event.preventDefault()
    const questionDownVote = packageQuestionDownVote()
    props.addQuestionVote(questionDownVote)
  }
  
  return (
    <div className='QuestionDetails' key={props.questionDetails.id}>
      <div className='LinksContainer--container'>
        <Link to='/'>
          <button className='BackButtonLink--button'>Back</button>
        </Link>
        <Link to="/ask">
          <button className="AskButtonLink--button">Ask</button>
        </Link>
      </div>
      <Header headerTitle={`Question & Answers`} />
      <div className='QuestionHeader--container'>
        <p>Created on: {props.questionDetails.created_at.slice(0,10)}</p>
      {(<span className="user--span">
          <PersonIcon />
          <div className="detail person-title">
            {props.questionDetails.user && (
              <p>{props.questionDetails.user.title}</p>
            )}
            {props.questionDetails.user && (
              <p>{props.questionDetails.user.username}</p>
            )}
          </div>

        </span>)}
      </div>
        <h3>{props.questionDetails.title}</h3>
        <p className='BodyText--p'>{props.questionDetails.body}</p>
        <div className='VoteBox--container'>
          <UpVote upVote={questionUpVote} details={props.questionDetails} type={`question`}/>
          <DownVote downVote={questionDownVote} details={props.questionDetails} type={`question`}/>
      </div>
      <NewComment addComment={props.addComment} postId={props.questionDetails.id} user={props.user}/>
      <CommentsContainer 
        details={props.questionDetails}
        addResponseVote={props.addResponseVote}
      />
  </div>
  )
}

export default QuestionDetails;
