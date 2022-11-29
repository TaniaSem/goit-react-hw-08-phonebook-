// import { ContactElement } from 'components/ContactElement/ContactElement';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/operations';
// import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { BtnDelete, ItemText, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <ItemText>
            {name}: {phone}
          </ItemText>
          <BtnDelete onClick={() => deleteContactById(id)} disabled={isLoading}>
            Delete
          </BtnDelete>
        </ListItem>
      ))}
    </List>
  );
};
