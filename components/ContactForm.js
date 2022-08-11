import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {Button} from "@mui/material";
function ContactForm() {
    const [state, handleSubmit] = useForm("mrgdgpag");
    if (state.succeeded) {
        return <p>Thank you for your message! We will contact you shortly.</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Full name
            </label>
            <input
                id="name"
                type="name"
                name="name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Button type="submit" color="primary" variant="contained" disabled={state.submitting}>
                Submit
            </Button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;
