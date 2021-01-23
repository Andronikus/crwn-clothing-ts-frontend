import React from 'react';

import { HeaderContainer, LogoContainer, Logo, OptionContainer, LinkOption } from './header.style';

const Header = () => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <OptionContainer>
                <LinkOption to="/shop">shop</LinkOption>
                <LinkOption to="/contact">contact</LinkOption>
                <LinkOption to="/signin">sign in</LinkOption>
            </OptionContainer>
        </HeaderContainer>
    );
}

export default Header;