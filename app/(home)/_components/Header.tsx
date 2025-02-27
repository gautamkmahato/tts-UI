import React from 'react'
import logo from '../../../public/assets/logo-3.png'
import Image from 'next/image'

export default function Header() {
  return (
    <>
        <header className="bg-backgroundPrimary">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <Image src={logo} width="144" height="144" alt='logo' />
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <a className="text-gray-200 transition hover:text-gray-200/75" href="#"> Home </a>
                        </li>

                        <li>
                        <a className="text-gray-200 transition hover:text-gray-200/75" href="#"> Playground </a>
                        </li>


                        <li>
                        <a className="text-gray-200 transition hover:text-gray-200/75" href="#"> Explore </a>
                        </li>

                        <li>
                        <a className="text-gray-200 transition hover:text-gray-200/75" href="#"> Pricing </a>
                        </li>

                        <li>
                        <a className="text-gray-200 transition hover:text-gray-200/75" href="#"> Documentation </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                    <a
                        className="rounded-md bg-buttonPrimary px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                        href="#"
                    >
                        Login
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </header>
    </>
  )
}
