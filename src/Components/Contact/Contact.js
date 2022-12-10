// import React from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sze5wgc',
            'template_g3bdl9r',
            form.current,
            'fN3FFwgxy4oZoJN0N')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="user_name" />
            <br />
            <br />
            <label>Email</label>
            <input className="input input-bordered input-primary w-full max-w-xs" type="email" name="user_email" />
            <br />
            <br />
            <label>Message</label>
            <textarea className="textarea textarea-primary" name="message" />
            <br />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Contact;