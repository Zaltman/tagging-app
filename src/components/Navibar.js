import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

export default function Navibar() {
  const location = useLocation();
  console.log(location);
  // const transition = useTransition(location, (location) => location.pathname, {
  //   from: { opacity: 0, transform: 'translate(100%, 0)' },
  //   enter: { opacity: 1, transform: 'translate(0%, 0)' },
  //   leave: { opacity: 0, transform: 'translate(-50%, 0)' },
  // });
  const userEmail = useSelector((state) => state.email);
  let userEmailElement;
  if (userEmail === 'Log in') {
    userEmailElement = <Link to={'/login'}>{userEmail}</Link>;
  } else {
    userEmailElement = <Link to={'/userpage'}>{userEmail}</Link>;
  }
  return (
    <nav className=" ">
      <div className="border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" to={'/'}>
            Tagging app
          </Link>
          <div className="flex items-center">{userEmailElement}</div>
        </div>
      </div>
      <div className="dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/gamepage'}>Play</Link>
              </li>
              <li>
                <Link to={'/highscores'}>Highscores</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
