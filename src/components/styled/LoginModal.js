import styled from 'styled-components';

const LoginModal = styled.div`
    background-color: white;
    border: 2px solid black;
    position: fixed;
    top:
        ${props => (props.open ? '170' : '-400')}px;
    left: calc(50% - 150px);
    height: 300px;
    width: 300px;
    z-index: 9000;
    transition: top 0.3s cubic-bezier(0.29, -0.15, 0.65, 1.19);
`;

export default LoginModal;
