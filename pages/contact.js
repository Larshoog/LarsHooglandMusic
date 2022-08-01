import Layout from '../components/Layout';

const Contact = () => (
    <Layout pagetype={'contact'}>
        <form action="/send-data-here" method="post">
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first"/>
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last"/>
            <button type="submit">Submit</button>
        </form>
    </Layout>
)

export default Contact
