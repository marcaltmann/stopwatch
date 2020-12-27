import Loader from 'react-loader-spinner';
import head from 'lodash/head';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function SuperComponent() {
    const numbers = [1, 2, 3];

    return (
        <>
            <p>Number: { head(numbers) }</p>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </>
    );
}
