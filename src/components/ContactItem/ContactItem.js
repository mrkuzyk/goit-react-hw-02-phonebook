import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
    return (
        <li key={id}>{name} : {number}</li>)
};

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
};