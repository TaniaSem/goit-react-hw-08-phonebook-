import { SectionPart, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionPart>
      <Title>{title}</Title>
      {children}
    </SectionPart>
  );
};
