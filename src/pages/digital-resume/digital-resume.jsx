import React from 'react';
import {
  StyledMainSection,
  StyledPageWrapper,
  StyledSecondarySection,
} from '../../shared/app-styles';
import {
  StyledCompanyInformation,
  StyledJobTitle,
  StyledResumeSection,
  StyledTimeSpanCaption,
} from './digital-resume-styles';

const DigitalResume = () => (
  <StyledPageWrapper>
    <StyledMainSection>
      <article>
        <h1>My Digital Resume.</h1>
        <StyledSecondarySection>
          <p>
            My life goal is to provide positive impact to the world. I'm very
            fortunate to say that as a front-end engineer at LinkedIn, I have
            the opportunity to do that by creating high-quality software that is
            aiming to remove bias from hiring processes across the world in
            favor of skill based hiring.
          </p>
          <p>
            The best part about working in the technology industry is the
            ability to constantly learn new things and be surprised every day.
            Daily evolution and improvement are some of my personal beliefs and
            I consider myself lucky to be able to work in a field that allows me
            to live it. I’m a person who hates to say no to new experiences, new
            knowledge, and new people and ideas to connect with.
          </p>
          <p>
            In my free time, I enjoy cooking; writing, playing and listening to
            music; and reading.
          </p>
        </StyledSecondarySection>
        <h2>Work Experience.</h2>
        <StyledResumeSection>
          <StyledJobTitle>
            Software Engineer at{' '}
            <a href='https://about.linkedin.com'>LinkedIn.</a>
          </StyledJobTitle>
          <StyledTimeSpanCaption>November 2020 - Present</StyledTimeSpanCaption>
          <StyledCompanyInformation>
            LinkedIn is the world's largest professional network with nearly 740
            million members in more than 200 countries and territories
            worldwide.
          </StyledCompanyInformation>
          <p>
            At LinkedIn I'm working as a Front-End Engineer on the Skill
            Assessments Team.
          </p>
        </StyledResumeSection>
        <StyledResumeSection>
          <StyledJobTitle>
            Software Engineer at <a href='https://www.gantri.com'>Gantri.</a>
          </StyledJobTitle>
          <StyledTimeSpanCaption>
            April 2020 - November 2020
          </StyledTimeSpanCaption>
          <StyledCompanyInformation>
            Gantri is the world’s first digital manufacturer for designer
            lighting. By completely reimagining the way lighting is developed,
            made, and sold, we've empowering the world’s best designers to
            create design-forward, functional pieces for your life. Gantry's
            manufacturing technologies are drastically more efficient, making
            good designers' lights radically more attainable and sustainable.{' '}
          </StyledCompanyInformation>
          <p>
            I worked primarily on the Admin panel React application for managing
            shipments, orders, print jobs, etc.
          </p>
          <p>Here’s some cool stuff I’ve done:</p>
          <ul>
            <li>
              Designed and implemented architecture for real-time data sync
              between front-end application and server.
            </li>
            <li>
              Built out RFID support so that workers can easily locate, manage,
              and assess parts that are in production, painting, or shipping
              states.
            </li>
            <li>
              Refactored entire stock and inventory system to eliminate
              unnecessary server requests, saving team members an average of 1-2
              seconds per interaction
            </li>
            <li>
              Revamped entire UI layout model, developing over 30 brand-new
              isolated, custom components with animations, micro-interactions
              and independent state handling, speeding up development processes
              by 1-2 days on average.
            </li>
            <li>
              Created a new system for caching and paging data in the front end
              to allow for faster page loads through cutting almost 100% of
              unnecessary API requests
            </li>
            <li>
              Developed a better system for tracking returns and replacements
              with orders allowing our customer success team to better help
              those with questions about their order in real time.
            </li>
            <li>Introduced animation and micro-interactions system</li>
            <li>
              Established clear code guidelines and enforcement system through
              pre-commit hooks
            </li>
            <li>
              Added support for front-end isolated component development, unit
              testing, integration testing, and HTML snapshot testing to enforce
              release quality via Storybook reducing monthly reported front-end
              bugs by 87%
            </li>
            <li>
              Helped establish and define more efficient software development
              processes. Leading the team to being able to deliver key features
              on time, every time.
            </li>
          </ul>
        </StyledResumeSection>
      </article>
    </StyledMainSection>
  </StyledPageWrapper>
);

export default DigitalResume;
