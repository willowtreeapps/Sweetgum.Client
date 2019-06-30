import * as React from 'react';

export enum Tab {
    Headers,
    Body
}

type Props = {
    defaultTab: Tab;
};

type State = {
    currentTab: Tab;
};

export class ResponseDetails extends React.Component<Props, State> {
    constructor(p: Props) {
        super(p);
        this.state = {
            currentTab: p.defaultTab
        };
    }

    navigateToHeaders = () => {
        this.setState({
            currentTab: Tab.Headers
        });
    };

    navigateToBody = () => {
        this.setState({
            currentTab: Tab.Body
        });
    };

    render() {
        return (
            <div className="response-details">
                <div className="response-details-tabs">
                    <a href="#" onClick={this.navigateToHeaders}>
                        Headers
                    </a>
                    <a href="#" onClick={this.navigateToBody}>
                        Body
                    </a>
                </div>
                <div className="request-options-panes">
                    <div style={{ display: this.state.currentTab === Tab.Headers ? '' : 'none' }}>
                        Response Headers stuff
                    </div>
                    <div style={{ display: this.state.currentTab === Tab.Body ? '' : 'none' }}>
                        Response Body stuff
                    </div>
                </div>
            </div>
        );
    }
}

export default ResponseDetails;
