import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import './contacts.css';
import { useState } from 'react';
import { useRef} from 'react';
import { send } from 'emailjs-com';

const Contact = () => {

  const form = useRef()
  const [sent,setSent] = useState(false)
  const[text, setText] = useState('');
  const[yourName, setname] = useState('');
  const[email, setEmail] = useState('');
  const[subject, setSubject] = useState('');
  const [valid,setValid]= useState(false)

  function handleSubmit(form){
    email.test(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)? setValid(true) :setValid(false);
    form.preventDefault();
    const message = {yourName,email,subject,text};
    alert('Name:'+yourName +', Email:'+email +', Subject:' +subject+', Message:'+text)
    
    
   {/*} send(
      'service_perso5r',
      'template_kb3dhbq',
      {yourName,email,subject,text},
      'Ad0Ub3wbzYwnzKi3q'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSent(true)
      })
      .catch((err) => {
        setSent(false)
        console.log('FAILED...', err);
      });
    console.log(message)
    setEmail(''); setSubject(''); setText(''); setname('');*/}
   

  }
  return (
    <form onSubmit={handleSubmit} id='message' ref={form} className='form-control form p-4' action='https://www.facebook.com/circwall'>
      <div><h3 className='text-light'>Let's Work together on your next project</h3><Icon.ArrowBarDown className='text-light'/></div>
      <input type='text' className='form-control' name='yourName'onChange={(e)=>setname(e.target.value)} value={yourName} placeholder='YOUR NAME.........' required/>
      <input className='form-control'type='email' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='EMAIL ...' required/>
      <input className='form-control' type='text' name='subject' onChange={(e)=>setSubject(e.target.value)}value={subject} placeholder ='SUBJECT OF MESSAGE ......eg work offer' required/>
      <textarea className='form-control' name='text' onChange={(e)=>setText(e.target.value)} placeholder='ENTER A MESSAGE TO CIRCWALL' value={text} required></textarea>
      <button  className='btn p-2 mt-2 text-center' type='submit'>Send Message<span className='send'><Icon.SendFill/></span><span className={sent===true? 'text-light ' : 'collapsed'}>submited <Icon.ArrowRightShort/></span></button>
      
    </form>
    
  )
}

export default Contact;