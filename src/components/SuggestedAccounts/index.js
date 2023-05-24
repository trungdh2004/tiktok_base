import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccoutnts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <p className={cx('see-all')}>See all</p>
        </div>
    );
}

SuggestedAccoutnts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccoutnts;
