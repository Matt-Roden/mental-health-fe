import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../styles/SubmissionModal.scss'
import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const submitStyle = {
  color: '#DA0064',
  border: 'solid #DA0064 4px',
  borderRadius: 0,
  height: '50px',
  width: '125px',
  backgroundColor: 'transparent'
};

const backStyle = {
  color: 'white',
  border: 'none',
  height: '50px',
  width: '125px',
  bgcolor: '#14CDD4',
  borderRadius: 0
}

interface SubmissionModalProps {
  handleSubmit: (event: React.FormEvent) => void;
}

 const SubmissionModal: React.FC<SubmissionModalProps> = ({ handleSubmit }) => {
  const [open, setOpen] = useState<boolean>(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
      sx={submitStyle}
        onClick={handleOpen}
      >Submit</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Does your question follow community, ethical, and confidentialty guidelines?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            If so, click submit. If not, please click the edit button and rephrase your question to follow our community standards. 
          </Typography>
          <Button sx={backStyle} onClick={event => handleClose()}>Edit</Button>
          <Button sx={submitStyle} onClick={event => handleSubmit(event)}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default SubmissionModal