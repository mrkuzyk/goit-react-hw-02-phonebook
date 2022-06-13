import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem'

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) =>
                <ContactItem
                    id={id}
                    name={name}
                    number={number}
                />)}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
};