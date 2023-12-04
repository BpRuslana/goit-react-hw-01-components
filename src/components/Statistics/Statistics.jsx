import { StyledLi, StyledSection, StyledSpanLabel, StyledSpanPercentage, StyledUl } from "./Statistics.styled";
import PropTypes from 'prop-types'; 

export const Statistics = data => {
  const {title, stats } = data;
  return (
    <StyledSection>
      {title && <h2 className="title">{title}</h2>}

      <StyledUl>
        {stats.map(({ id, label, percentage }) => (
          <StyledLi key={id}>
            <StyledSpanLabel>{label}-</StyledSpanLabel>
            <StyledSpanPercentage>{percentage}%</StyledSpanPercentage>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledSection>
  );
};



Statistics.protoTypes = {
  data: PropTypes.shape({
    title:PropTypes.string,
    stats: PropTypes.shape({
      id:PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.string
    })
  })
}