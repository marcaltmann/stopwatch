import classNames from 'classnames';

import styles from './Stopwatch.module.css';

function Stopwatch() {
    return (
        <div className={styles.outer}>
            <p className={styles.text}>
                Hello
            </p>
            <p className={classNames(styles.text, 'u-margin-top')}>
                world!
            </p>
        </div>
    );
}

export default Stopwatch;
