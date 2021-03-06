/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import * as ReactIntl from 'react-intl';

var FormattedHTMLMessage = ReactIntl.FormattedHTMLMessage;

class Message extends React.Component {
    static propTypes = {
        msgId: PropTypes.string.isRequired,
        msgParams: PropTypes.object
    };

    static contextTypes = {
        intl: PropTypes.object
    };

    render() {
        return this.context.intl ? <FormattedHTMLMessage id={this.props.msgId} values={this.props.msgParams}/> : <span>{this.props.msgId || ""}</span>;
    }
}

export default Message;
