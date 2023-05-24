import PropTypes from 'prop-types';

function Menu({ children }) {
    console.log(children);
    return <nav>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
