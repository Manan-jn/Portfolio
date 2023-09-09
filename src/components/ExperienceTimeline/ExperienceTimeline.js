import React from "react";
import styled from "styled-components";

const ExperienceTimeline = () => {
  return (
    <Timeline>
      <Event>
        <Date>May 2023 - July 2023</Date>
        <JobTitle>Engineering Development Group (EDG) Intern</JobTitle>
        <Company>MathWorks</Company>
        <Description>
          Worked with Quality Engineering team to re-architect the
          variantreducer tool, resulting in over 60% testing time reduction and
          enhanced test efficiency.
        </Description>
      </Event>

      <Event>
        <Date>June 2022 - July 2022</Date>
        <JobTitle>Full Stack Developer Intern</JobTitle>
        <Company>Travinity Solutions</Company>
        <Description>
          Worked on a cross-platform mobile application using React-Native to
          provide a holistic experience for travelers.Responsibilities involved
          working on the Back-end using Node.js and Front-end development of the
          application.
        </Description>
      </Event>
      <Event>
        <Date>Sept 2021 - Present</Date>
        <JobTitle>Core Member</JobTitle>
        <Company>Google Developer Student Club (GDSC)</Company>
        <Description>
          Contributed to the organization of numerous events and workshops and
          Mentored over 50 students on an individual level.
        </Description>
      </Event>
    </Timeline>
  );
};

const Timeline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Event = styled.div`
  text-align: left;
  max-width: 600px;
  margin-bottom: 30px;
  background: ${(props) => props.theme.colors.cardsBackgroundColor} 0% 0%
    no-repeat padding-box;
  border-radius: 10px;
  padding: 20px; /* Add padding for spacing */
  border-radius: 8px; /* Optional: Add rounded corners */
`;

const Date = styled.div`
  font-weight: bold;
  color: #fff; /* White text */
  background-color: #000; /* Slightly different background color */
  padding: 5px 10px; /* Add padding for spacing */
  display: inline-block; /* Make the background span the width of the text */
  margin-bottom: 10px;
  border-radius: 4px; /* Optional: Add rounded corners */
`;

const JobTitle = styled.div`
  font-weight: bold;
  color: #fff; /* White text */
  margin-bottom: 8px;
`;

const Company = styled.div`
  color: #fff; /* White text */
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #fff; /* White text */
  margin-bottom: 0;
`;

export default ExperienceTimeline;
