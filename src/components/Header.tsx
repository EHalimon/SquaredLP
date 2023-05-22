import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import { LogoHeader } from '../assets/LogoHeader';

import { NavigationLink } from '.';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const routes = [{ route: '/product', title: 'Product' }, { route: '/about', title: 'About' }, { route: '/contact', title: 'Contact' }];

  return (
    <header className={`px-8 py-5  transition-all ease-in duration-500 mb-14 ${showMenu ? 'mb-60' : 'md:mb-32'}`}>
      <nav className="gap-4 md:flex md:items-center md:gap-12 md:justify-between">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <LogoHeader />
          </Link>
          <span
            className="block mx-2 text-3xl text-teal-400 cursor-pointer md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </span>
        </div>

        <div
          className={`flex md:flex-row flex-col md:flex md:gap-12 gap-4 md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  top-[-400px] transition-all ease-in duration-500 ${showMenu ? 'top-[80px] opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col gap-4 md:items-center md:gap-12 md:flex-row">
            {routes.map((route) =>
              <NavigationLink key={route.route} location={location.pathname} route={route.route} title={route.title} />,
            )}
          </div>

          <div className="flex flex-col gap-4 md:items-center md:gap-12 md:flex-row">
            <NavigationLink location={location.pathname} route={'/login'} title={'Log In'} />
            <Link to={'/contact'}>
              <button className="px-4 py-2 font-medium text-teal-400 border border-teal-400 rounded-full font-inter text-caption1">
                Schedule Call
              </button>
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
};