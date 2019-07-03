import RequestMethodDropdown from './RequestMethodDropdown';
import RequestUrlTextbox from './RequestUrlTextbox';
import RequestSendButton from './RequestSendButton';
import { RequestOptions, Tab as RequestOptionsTab } from './RequestOptions';
import { ResponseDetails, Tab as ResponseOptionsTab } from './ResponseDetails';
import * as React from 'react';

export default class Request extends React.Component {
    onClick(event: React.MouseEvent) {
        console.log(this);
        console.log(event);
    }

    render() {
        const onClickHandler = (event: React.MouseEvent) => {
            this.onClick(event);
        };

        return (
            <div>
                <RequestMethodDropdown />
                <RequestUrlTextbox />
                <RequestSendButton onClick={onClickHandler} />
                <RequestOptions defaultTab={RequestOptionsTab.Headers} />
                <ResponseDetails defaultTab={ResponseOptionsTab.Headers} />
            </div>
        );
    }
}
