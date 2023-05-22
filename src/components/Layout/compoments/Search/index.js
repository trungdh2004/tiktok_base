import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as Popper } from 'src/components/Popper/indext';
import AccountItem from 'src/components/AccountItem/indext';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import useDebounce from 'src/hooks/useDebount';
import axios from 'axios';
import * as request from 'src/untils/request';
import * as searchServies from 'src/apiServies/searchServies';

const cx = classNames.bind(styles);
function Search({ ...passProps }) {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServies.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const headlClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const headleHideResult = () => {
        setShowResult(false);
    };

    const headleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Popper>
                            <h3 className={cx('search-title')}>account</h3>
                            {searchResult.map((item) => (
                                <AccountItem data={item} key={item.id} />
                            ))}
                        </Popper>
                    </div>
                )}
                onClickOutside={headleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        required
                        type="text"
                        placeholder="Search account play videos"
                        spellCheck={false}
                        onChange={headleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    ></input>
                    {!!searchValue && !loading && (
                        <button className={cx('search-clear')} onClick={headlClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
