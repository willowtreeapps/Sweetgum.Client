import * as React from 'react';

type Props = {
    onClick: React.MouseEventHandler;
};

export default class RequestSendButton extends React.Component<Props> {
    render() {
        return (
            <button className="request-send" onClick={this.props.onClick}>
                Send
            </button>
        );
    }
}
