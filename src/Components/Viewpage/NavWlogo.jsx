import { Disclosure, Menu } from "@headlessui/react";



export default function NavTop() {
  return (
    <div style={{ position: "fixed", width: "100%", zIndex: "999" }}>
      <Disclosure as="nav" className=" bg-transparent backdrop-blur-sm" >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
              <div className="relative flex h-16 items-center justify-between">

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <h1 className=" text-3xl font-bold tracking-widest">LACED.</h1>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <p>Sign Out</p>
                      </Menu.Item>
                    </Menu.Items>

                  </Menu>
                </div>
              </div>
            </div>


          </>
        )}
      </Disclosure>
    </div>
  );
}
