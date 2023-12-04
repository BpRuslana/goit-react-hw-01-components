import { StyledLi, StyledName, StyledSpanOnline } from "./FriendsListItem.styled";
import PropTypes from 'prop-types'; 

export const FriendsListItem = ({ avatar, name, isOnline, id }) => (
  
  <StyledLi key={id}>
    <StyledSpanOnline $isOnline={isOnline}></StyledSpanOnline>
    <img src={avatar} alt="User avatar" width="48" />
    <StyledName>{name}</StyledName>
  </StyledLi>
);

FriendsListItem.propTypes = {
      avatar:PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    };