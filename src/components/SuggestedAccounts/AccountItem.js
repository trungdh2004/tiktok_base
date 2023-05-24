import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as Popper } from 'src/components/Popper/indext';
import AccountPriview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <Popper>
                    <AccountPriview />
                </Popper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} render={renderPreview} placement="bottom" visible>
                <div className={cx('account-item')}>
                    <img
                        src="https://yt3.ggpht.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s88-c-k-c0x00ffffff-no-rj"
                        className={cx('avatar')}
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Đỗ Hữu Trung</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Hữu Trung</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
