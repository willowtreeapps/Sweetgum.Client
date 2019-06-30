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

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class RequestOptions extends React.Component<Props, State> {
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
            <div className="request-options">
                <div className="request-options-tabs">
                    <a href="#" onClick={this.navigateToHeaders}>
                        Headers
                    </a>
                    <a href="#" onClick={this.navigateToBody}>
                        Body
                    </a>
                </div>
                <div className="request-options-panes">
                    <div style={{ display: this.state.currentTab === Tab.Headers ? '' : 'none' }}>
                        Headers stuff
                    </div>
                    <div style={{ display: this.state.currentTab === Tab.Body ? '' : 'none' }}>
                        Body stuff
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestOptions;
