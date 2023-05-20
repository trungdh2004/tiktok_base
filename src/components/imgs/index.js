import { forwardRef, useState } from 'react';
import images from 'src/assets/images/indext';
import classNames from 'classnames';
import styles from './Image.module.scss';
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

export default forwardRef(LogoUser);
