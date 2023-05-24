import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu, { Menuitem } from 'src/layouts/DefaultLayout/SideBar/Menu/index';
import config from 'src/config';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from 'src/components/Icons/index';
import SuggestedAccoutnts from 'src/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <Menuitem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></Menuitem>
                <Menuitem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                ></Menuitem>
                <Menuitem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></Menuitem>
            </Menu>
            <SuggestedAccoutnts label="Suggested Accounts" />
        </aside>
    );
}

export default Sidebar;
