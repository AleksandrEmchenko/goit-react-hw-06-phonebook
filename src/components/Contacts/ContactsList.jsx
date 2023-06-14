import { useSelector } from "react-redux";
import { getContacts, getFilter } from "components/redux/selector";
import ContactItem from "components/ContactItem/ContactItem";
import { List } from "../Contacts/Contacts.styled";

// const getVisiblesContacts = contacts.filter((contact) => contact.name.includes(filter));
// const getVisiblesContacts = (contacts, setStatusFilter) => {
//   contacts.filter((contact) => contact.name.includes(filter));
// };

function ContactsList() {
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  



  return (
    <div>
      {contacts.length !== 0 ? (
        <List>
          {contacts.map((contact) => {
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
