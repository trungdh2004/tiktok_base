import Header from '../compoments/Header';
import Sidebar from './SideBar';
import styles from './DefaulLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('main')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
