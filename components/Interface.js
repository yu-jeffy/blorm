import React from 'react';
import styles from '../styles/Interface.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Interface = () => {
    return (
        <div className={styles.container}>
            <ConnectButton />
        </div>
    );
};

export default Interface;