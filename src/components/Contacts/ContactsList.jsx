import { useSelector } from "react-redux";
import { getContacts, getFilter } from "components/redux/selector";
import ContactItem from "components/ContactItem/ContactItem";
import { List } from "../Contacts/Contacts.styled";

// const getVisiblesContacts = contacts.filter((contact) => contact.name.includes(filter));
// const getVisiblesContacts = (contacts, setStatusFilter) => {
//   contacts.filter((contact) => contact.name.includes(filter));
// };

function ContactsList() {
  // const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };


  const visibleContacts = filteredContacts(contacts, filter);



// const visibleContacts = (contacts, setStatusFilter) => {
//   return contacts.filter(contact => !contact.name.includes(filter));
// }


  return (
    <div>
      {contacts.length !== 0 ? (
        <List>
          {visibleContacts.map((contact) => {
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
