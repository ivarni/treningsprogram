import styled from 'styled-components';

/* login__icon button button__icon button__icon--login */

const IconButton = styled.button`
    background: none;
    background-repeat: no-repeat;
    background-position-x: 50%;
    border: none;
    color: transparent;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
`;

const IconButtonAdd = IconButton.extend`
    background-image: url(/images/ic_add_circle_black_24px.svg);
    background-size: 40px;
    height: 40px;
    width: 50px;
`;

const IconButtonClear = IconButton.extend`
    background-image: url(/images/ic_clear_black_24px.svg);
    height: 20px;
    width: 25px;
`;

const IconButtonEdit = IconButton.extend`
    background-image: url(/images/ic_mode_edit_black_24px.svg);
    height: 20px;
    width: 25px;
`;

// Use margin to leave room for rotating without expanding the
// focus box
const IconButtonExpand = IconButton.extend`
    background-image: url(/images/ic_keyboard_arrow_down_black_24px.svg);
    height: 20px;
    margin-right: 10px;
    transition: transform 0.2s cubic-bezier(0.29, -0.15, 0.65, 1.19);
    transform: ${props => (props.expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    width: 25px;
`;

const IconButtonPerson = IconButton.extend`
    background-image: url(/images/ic_person_black_24px.svg);
    background-size: 40px;
    height: 40px;
`;

export {
    IconButtonAdd,
    IconButtonClear,
    IconButtonEdit,
    IconButtonExpand,
    IconButtonPerson,
};
