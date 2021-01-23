import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogoImage} from '../../assets/crown.svg';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 7rem;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    border: 1px solid green;
    font-size: 2rem;
`;


export const LogoContainer = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: auto;
`;


export const Logo = styled(LogoImage)`
    padding-left: 1.5rem;
`
export const OptionContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const LinkOption = styled(Link)`
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 0.5rem;
    border-bottom: 1px solid #ffffff;
    transition: all 0.3s;

    &:hover {
        border-bottom: 1px solid #000;
    }
`

