import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as Popper } from 'src/components/Popper/indext';
import style from './Menu.module.scss';
import MenuItem from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const defauleonChange = () => {};

const cx = classNames.bind(style);
function Menu({ children, items = [], onChange = defauleonChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, indext) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={indext}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prive) => [...prive, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            offset={[12, 8]}
            placement="bottom-end"
            delay={[0, 500]}
            hideOnClick={false}
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Popper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-scroll')}>{renderItem()}</div>
                    </Popper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
