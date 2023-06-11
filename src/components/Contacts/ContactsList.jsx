import { List } from "../Contacts/Contacts.styled";

import { useSelector } from "react-redux";

import { getContacts, getFilter } from "components/redux/selector";
import ContactItem from "components/ContactItem/ContactItem";


function ContactsList() {
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  

  const getVisiblesContacts = contacts.filter((contact) => contact.name.includes(filter));

  return (
    <div>
      {contacts.length !== 0 ? (
        <List>
          {getVisiblesContacts.map((contact) => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
        </List>
      ) : (
        "Your contact list is empty"
      )}
    </div>
  );
}

export default ContactsList;
