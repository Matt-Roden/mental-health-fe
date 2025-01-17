import { Question } from "../../interfaces";
import { useHistory } from "react-router-dom";
import "../../styles/questionCard.scss";
import PersonIcon from '@mui/icons-material/Person';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  let history = useHistory();

  const redirect = (id: number) => {
    console.log("in redirect");
    const url = `/question${id}`;
    history.push(url);
  };

  return (
    <div className="QuestionCard" key={props.question.id}>
      {(<span className="user--span">
          <PersonIcon/>
          <p className="detail person-title">{props.question.user && props.question.user.title}</p>
        </span>)}
      <h2 className="questionCard--h2">{props.question.title}</h2>
      {props.question.body && <p className="body">{props.question.body.slice(0, 60)} ...</p>}
      {props.question['response_count'] > 1 && <p className="response-count"> {props.question['response_count'] } responses </p>}
      {props.question['response_count'] === 1 && <p className="response-count"> {props.question['response_count'] } response </p>}
      {props.question['response_count'] === 0 && <p className="response-count"> {props.question['response_count'] } responses </p>}
      <p className="detail">Post Date: {props.question.updated_at.slice(0,10)}</p>
      <button
        className="read--btn"
        onClick={() => redirect(props.question.id)}
      >
        READ
      </button>
    </div>
  );
};

export default QuestionCard;
