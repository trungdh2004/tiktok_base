import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    text = false,
    large = false,
    primary = false,
    small = false,
    ouline = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...pasePops
}) {
    let Comp = 'button';

    const pops = {
        onClick,
        ...pasePops,
    };

    if (disabled) {
        Object.keys(pops).forEach((key) => {
            if (key.startsWith('on') && typeof pops[key] === 'function') {
                delete pops[key];
            }
        });
    }

    if (to) {
        pops.to = to;
        Comp = Link;
    }
    if (href) {
        pops.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        ouline,
        small,
        large,
        text,
        disabled,
        rounded,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classes} {...pops}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {<span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    ouline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
