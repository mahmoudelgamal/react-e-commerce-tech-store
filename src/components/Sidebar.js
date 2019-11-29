import React, { Component } from 'react';
import styled  from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() { 
        return <ProductConsumer>
            {value => {
                const{handleSidebar, links, sidebarOpen}=value
                return (
                    <SidebarWrapper show={sidebarOpen}>
                        <ul>
                            {links.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.path}
                                    className="sidebar-link"
                                    onClick={handleSidebar}>
                                {link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </SidebarWrapper>
                )
            }}
        </ProductConsumer>
    }
}

export default Sidebar;

const SidebarWrapper = styled.nav`
    position: fixed;
    top: 61px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-right: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
    ul {
        list-style-type: none;
        padding: 0 !important;
    }
    .sidebar-link {
        display: block;
        font-size: 1.5rem;
        text-transform: capitalize;
        color: var(--mainBlack);
        padding: 0.5rem 1.5rem;
        background: transparent;
        transition: var(--mainTransition);
    }
    .sidebar-link:hover {
        background: var(--primaryColor);
        color: var(--mainWhite);
        padding: 0.5rem 1.5rem 0.5rem 2.5rem;
        text-decoration: none;
    }
    @media (min-width: 576px) {
        width: 20rem;
    }

`