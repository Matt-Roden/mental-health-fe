import { stringify } from 'querystring';
import React, { useState } from 'react'
import { Link } from "react-router-dom";

import TagGenerator from '../TagGenerator/TagGenerator';

// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Question {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

const NewQuestionForm:React.FC = () => {
  
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [newTag, setNewTag] = useState<string>('')
    const [tags, setTags] = useState<string[] | any>([])
    const [question, setQuestion] = useState<Question | any>({}) // needs to be changed - not sure why this throws an error without any
    const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false)

    const packageQuestion = (): Question => {
      return {
        id: Date.now(),
        title: title,
        body: body,
        tags: tags
      }
    }
  
    const handleSubmit = (event: React.FormEvent): void => {
      event.preventDefault()
      const newQuestion = packageQuestion()
      setQuestion(newQuestion)
      setIsSubmitClicked(true)
      setTags([])
      setTitle('')
      setBody('')
    }

    const handleAddTag = (event: React.FormEvent): void => {
      event.preventDefault()
      setTags([...tags, newTag])
      setNewTag('')
    }

  return (
    <section>
      <div>Progress Bar Here</div>
      <form>

        <div>
          <label>Question</label>
          <input 
            type="text" 
            name='title'
            value={title}
            onChange={event => setTitle(event.target.value)}
            required
          />
        </div>

        <div>
          <label>Provide More Context</label>
          <textarea
            name='body'
            value={body}
            onChange={event => setBody(event.target.value)} 
          />
        </div>

        <div>
          <label>Add Tags</label>
          <input 
            type="text" 
            name="tag-input"
            value={newTag}
            onChange={event => setNewTag(event.target.value)}
          />
          <button onClick={event => handleAddTag(event)}>Add Tag</button>
        </div>

      <Link to='/'>
        <button onClick={event => event.preventDefault()}>Back</button>
      </Link>
        <button type='submit' onClick={event => handleSubmit(event)}>Submit</button>
      </form>
    </section>
  )
}


export default NewQuestionForm

// state: ✅
    //questions - {...} ✅
    //title - string ✅
    //context/body - string ✅
    // tag - string[] ✅
  
  // new Question making function ✅
  // handleSubmit function 
    // makes a new question object to be posted ✅
    // sets the new question object into state - eventually will be passed through a function that POSTs it to the db ✅
    // sets property of isSubmitClicked to true ✅
    // Pass through a validation method to,
      // format the responses - example: {question : 'how to do thing'} --> {question: "How to do thing?"}
      // add required property to title and tags

  // TagCreator input - should be it's own component - will hold tags in state
    // needs to except all the tags as props
    // allows a string to be accepted by the user ONLY if it doesn't exist in the tags array already


  // Eventually: some sort of mapping fuction to dynamically create options 
    //for the 'select' form element based off of a tags array. I assume the array will 
    // come from the BE and be updated when a user makes a tag - not sure how to implement users making a tag yet 
  
  //After a user clicks submit:
    // change isSubmitClicked to true
    // render component that says 'make another post or go back home' - two buttons, both with links
      // could use a modal for this
      // --> this seems like the best option

    // OR: could route to a new page with the same message and linked buttons - if going this route would the submit need a link around it?

    // const topicTags = [
    //   'addiction',
    //   'depression',
    //   'case law',
    //   'anxiety',
    //   'child therapy'
    // ];

    // <div>
    //       <label>Tag Your Question</label>
    //       <Select
    //       multiple
    //       value={tags}
    //       onChange={handleChange}
    //       input={<OutlinedInput label="Name" />}
    //       required
    //     >
    //       {topicTags.map((tag: string) => (
    //         <MenuItem
    //           key={tag}
    //           value={tag}
    //         >
    //           {tag}
    //         </MenuItem>
    //       ))}
    //     </Select>
    //     </div>
