import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navibar() {
  const userEmail = useSelector((state) => state.userEmail);
  let userEmailElement;
  if (userEmail === 'Log in') {
    userEmailElement = <Link to={'/login'}>{userEmail}</Link>;
  } else {
    userEmailElement = <Link to={'/userpage'}>{userEmail}</Link>;
  }
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" to={'/'}>
            Tagging app
          </Link>
          <div className="flex items-center">{userEmailElement}</div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/gamepage'}>Levels</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
