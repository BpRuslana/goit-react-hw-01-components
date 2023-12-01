import { StyledDivWrapper, StyledImg, StyledLi, StyledSpanLabel, StyledSpanQuantity, StyledStats, StyledText } from "./Profile.styled";
import PropTypes from 'prop-types'; 

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <StyledDivWrapper>
      <div>
        <StyledImg src={avatar} alt="User avatar" />
        <StyledText>{username}</StyledText>
        <StyledText>{tag}</StyledText>
        <StyledText>{location}</StyledText>
      </div>
      <StyledStats>
        <StyledLi>
          <StyledSpanLabel>Followers</StyledSpanLabel>
          <StyledSpanQuantity>{stats.followers}</StyledSpanQuantity>
        </StyledLi>
        <StyledLi>
          <StyledSpanLabel>Views</StyledSpanLabel>
          <StyledSpanQuantity>{stats.views}</StyledSpanQuantity>
        </StyledLi>
        <StyledLi>
          <StyledSpanLabel>Likes</StyledSpanLabel>
          <StyledSpanQuantity>{stats.likes}</StyledSpanQuantity>
        </StyledLi>
      </StyledStats>
    </StyledDivWrapper>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username:PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};