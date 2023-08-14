import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const Contacts = () => {
  const { data: contacts } = useGetContactsQuery();

  return (
    <>
      {contacts && (
        <>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />

          <ContactList />
        </>
      )}
    </>
  );
};
export default Contacts;
