import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">ByteNotes</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Chennai ,ByteNotes provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    ByteNotes<br />
                    Chennai Insitute of Technology<br />
                    City-Chennai<br />
                    <a href="tel:+9">9159929231</a>
                </address>
                <br />
                <p>Owner:ByteNotes Computer Service Centre</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public