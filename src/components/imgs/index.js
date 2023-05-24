import { forwardRef, useState } from 'react';
import images from 'src/assets/images/indext';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const LogoUser = ({ className, src, alt, fillback = images.noImage, ...pros }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handlError = () => {
        setFallBack(fillback);
    };

    return (
        <img
            ref={ref}
            src={fallBack || src}
            alt=""
            className={(styles.wrapper, className)}
            {...pros}
            onError={handlError}
        ></img>
    );
};

LogoUser.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fillback: PropTypes.string,
};

export default forwardRef(LogoUser);
