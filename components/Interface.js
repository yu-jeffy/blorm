import React, { useState, useEffect } from 'react';
import styles from '../styles/Interface.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: '10px',
        backgroundColor: '#ebebeb',
        border: 'gray solid 1px',
        outline: 'gray auto 2px',
        height: '95%',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'gray',
    }),

};

const currencyOptions1 = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
];

const currencyOptions2 = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'LTC', label: 'LTC' },
];

const Interface = () => {
    const [menuPortalTarget, setMenuPortalTarget] = useState(null);
    const [selection1, setSelection1] = useState(currencyOptions1[0]);
    const [selection2, setSelection2] = useState(currencyOptions2[0]);
    const [selection3, setSelection3] = useState(currencyOptions1[0]);
    const [selection4, setSelection4] = useState(currencyOptions2[0]);

    useEffect(() => {
        setMenuPortalTarget(document.body);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.section_from}>
                <span>From:</span>
                <div>
                    <button>tx history</button>
                    <button>settings</button>
                </div>
            </div>
            <div className={styles.section_from_currency}>
                <div className={styles.currency_dropdown_container}>
                    <Select
                        options={currencyOptions1}
                        className={styles.currency_dropdown}
                        styles={customStyles}
                        menuPortalTarget={menuPortalTarget}
                        defaultValue={selection1}
                        onChange={setSelection1} // Add this
                    />
                    <Select
                        options={currencyOptions2}
                        className={styles.currency_dropdown}
                        styles={customStyles}
                        menuPortalTarget={menuPortalTarget}
                        defaultValue={selection2}
                        onChange={setSelection2} // Add this
                    />
                </div>
                <div className={styles.balance}>
                    <span>0</span>
                </div>
            </div>
            <div className={styles.section_to}>
                <span>To:</span>
            </div>
            <div className={styles.section_to_currency}>
                <div className={styles.currency_dropdown_container}>
                    <Select
                        options={currencyOptions1}
                        className={styles.currency_dropdown}
                        styles={customStyles}
                        menuPortalTarget={menuPortalTarget}
                        defaultValue={selection3}
                        onChange={setSelection3} // Add this
                    />
                    <Select
                        options={currencyOptions2}
                        className={styles.currency_dropdown}
                        styles={customStyles}
                        menuPortalTarget={menuPortalTarget}
                        defaultValue={selection4}
                        onChange={setSelection4} // Add this
                    />
                </div>
                <div className={styles.balance}>
                    <span>0</span>
                </div>
            </div>
            <div className={styles.section_trade_button}>
                <ConnectButton />
            </div>

        </div>
    );
};

export default Interface;