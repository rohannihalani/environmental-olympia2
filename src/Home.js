import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="top">
        <section className="left">
          <h1>
            Environmental <br />
            Science <br />
            Olympia
          </h1>
        </section>
        <section className="right">
          <a className="btn learn-btn" href="#bottomID">
            Learn More
          </a>
        </section>
      </div>
      <div className="bottom" id="bottomID">
        <section className="info">
          <article>
            <h2>Question 1?</h2>
            <p>Answer</p>
          </article>
          <article>
            <h2>Question 2?</h2>
            <p>Answer</p>
          </article>
          <article>
            <h2>Question 3?</h2>
            <p>Answer</p>
          </article>
        </section>
        <section className="footer-section">
          <Link to="/quiz" className="quiz-btn btn">
            Start Test
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Home;
