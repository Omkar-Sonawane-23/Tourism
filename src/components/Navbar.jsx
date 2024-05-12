import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Places', href: '/home', current: false },
  { name: 'Explore', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [currentItem, setCurrentItem] = useState(navigation.find(item => item.current).name);

  const handleClick = (name) => {
    setCurrentItem(name);
    navigation.forEach(item => {
      item.current = item.name === name;
    });
  };

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-5 max-w-screen px-2 sm:px-4 lg:px-6 flex justify-between items-center">
            <div className="flex flex-shrink-0 items-start">
              <iframe src="https://lottie.host/embed/59678698-a7c7-4edb-8320-bcfa822ba3f3/JFrtEUCmcV.json" className='h-20 w-28 '></iframe>
              <h1 className='text-[2rem] my-auto sm:text-[3rem] font-[Agbalumo]'>Bharat <span id='samarkand' className="text-[#ff9900]">Yatra</span></h1>
            </div>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute ml-48 inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                     
                      <Link to ={item.href} key={item.name} className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-600 hover:text-white',
                            'rounded-md px-3.5 py-2.5 text-md font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          onClick={() => handleClick(item.name)}> {item.name} </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col ">
              {navigation.map((item) => (
                <Disclosure.Button>
                  <Link to={item.href} key={item.name} as="a" className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-600 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => handleClick(item.name)}>{item.name}</Link>
                  
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
