import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="py-4 shadow-lg bg-gradient-to-r from-blue-500 to-orange-500">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="mr-6">
                        <Link to="/">
                            <Logo
                                width="70px"
                                className="transition-transform transform hover:scale-110"
                            />
                        </Link>
                    </div>
                    <ul className="flex ml-auto space-x-4">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className="group">
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 font-semibold text-white duration-200 bg-blue-700 rounded-full hover:bg-blue-600 group-hover:shadow-lg"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className="group">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
