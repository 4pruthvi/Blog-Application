import React from 'react'
import {Container, Logo , LogoutBtn} from '../index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    // below syntax is used to get the auth status from the redux store and navigate is used to navigate to different pages
    // authStatus is used to check whether the user is logged in or not and based on that we can show different nav items in the header
    // useNavigate is used to navigate to different pages when the nav items are clicked
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    // below syntax is used to create an array of nav items which will be rendered in the header and based on the auth status we can show different nav items in the header
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus, // if the user is not logged in then show the login nav item
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus, // if the user is not logged in then show the signup nav item
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus, // if the user is logged in then show the add post nav item
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,   
        },
    ]

    return (
        // below syntax is used to create a header component which will be rendered in the application and it contains the logo and nav items and based on the auth status we can show different nav items in the header
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className = "flex"> 
                    <div className='mr-4'>
                        {/* // below syntax is used to render the logo and when the logo is clicked then it will navigate to the home page */}
                        <Link to="/">
                            <Logo width='70px'/>
                        </Link>
                    </div>
                    {/* // below syntax is used to render the nav items in the header and when the nav items are clicked then it will navigate to the respective pages and based on the auth status we can show different nav items in the header */}
                    <ul className='flex ml-auto'>
                        {navItems.map((items) => 
                            // below syntax is used to check whether the nav item is active or not and if it is active then render the nav item otherwise return null and when the nav item is clicked then it will navigate to the respective page using the navigate function
                            items.active ? (
                            <li key={items.name}>
                                <button
                                onClick={() => navigate(items.slug)}
                                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >{items.name}</button>
                            </li>
                        ) : null
                        )}
                        {/* // below syntax is used to check whether the user is logged in or not and if the user is logged in then show the logout button in the header and when the logout button is clicked then it will log out the user and navigate to the home page */}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
