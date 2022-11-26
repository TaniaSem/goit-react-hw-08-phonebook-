import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Box } from './Contacts.styled';

const Contacts = () => {
  return (
    <Box>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {/* {contacts && <ContactList />} */}
        <ContactList />
      </Section>
    </Box>
  );
};

export default Contacts;
