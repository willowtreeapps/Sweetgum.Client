import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import RequestMethodDropdown from './RequestMethodDropdown';
import RequestUrlTextbox from './RequestUrlTextbox';
import RequestSendButton from './RequestSendButton';
import { RequestOptions, Tab as RequestOptionsTab } from './RequestOptions';
import { ResponseDetails, Tab as ResponseOptionsTab } from './ResponseDetails';

const Application = () => (
    <div>
        Hello World from Electron!
        <RequestMethodDropdown />
        <RequestUrlTextbox />
        <RequestSendButton />
        <RequestOptions defaultTab={RequestOptionsTab.Headers} />
        <ResponseDetails defaultTab={ResponseOptionsTab.Headers} />
    </div>
);

export default hot(Application);
