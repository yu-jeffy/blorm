import React from 'react';
import styles from '../styles/Interface.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: '10px',
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
                    <Select options={currencyOptions1} className={styles.currency_dropdown} styles={customStyles} />
                    <Select options={currencyOptions2} className={styles.currency_dropdown} styles={customStyles} />
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
                    <Select options={currencyOptions1} className={styles.currency_dropdown} styles={customStyles} />
                    <Select options={currencyOptions2} className={styles.currency_dropdown} styles={customStyles} />
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