import { useRef } from 'react';
import '../Css/contact.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Config/firebase';

const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const formSubmition = async (event)=>{
        event.preventDefault();
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let message = messageRef.current.value;

        let c = collection(db, "messages");
        await addDoc(c,{
            name:name,
            email:email,
            message:message
        });

        document.querySelector('form').reset();
    }

    return (
        <section className="contact" id="contact">
           <form onSubmit={formSubmition}>
                <h2>Contact Me</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" ref={nameRef} required/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" ref={emailRef} required/>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" ref={messageRef} required></textarea>
                <button type='submit'>Send</button>
           </form>
        </section>
    );
}
 
export default Contact;