import utilStyles from "../styles/utils.module.css";
import Layout from '../components/Layout';
import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import ContactForm from "../components/ContactForm";

const Contact = () => (
    <Layout pagetype={'contact'}>
        <div className={utilStyles.formcontainer}><ContactForm /></div>
    </Layout>
)

export default Contact
