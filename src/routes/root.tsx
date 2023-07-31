import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Ben Testing in Production</h1>
        <nav>
          <ul>
            <li>
              <Link to="/space">Navigate Through Space</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
