/**
 * @copyright   2010-2016, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 */

import React, { PropTypes } from 'react';
import Component from '../Component';
import bind from '../../decorators/bind';
import collection from '../../prop-types/collection';
import CONTEXT_TYPES from './ContextTypes2';
import MODULE from './module';

export default class Next extends Component {
    static module = MODULE;

    static contextTypes = CONTEXT_TYPES;

    static propTypes = {
        children: PropTypes.node,
        onClick: collection.func
    };

    /**
     * Handles clicking the next button.
     *
     * @param {SyntheticEvent} e
     */
    @bind
    handleOnClick(e) {
        this.context.nextItem();
        this.handleEvent('click', e);
    }

    /**
     * Render a button that cycles to the next item.
     *
     * @returns {ReactElement}
     */
    render() {
        let props = this.props;

        return (
            <button
                type="button" role="button"
                className={this.formatChildClass('next')}
                onClick={this.handleOnClick}
                {...this.inheritNativeProps(props)}
            >
                {props.children}
            </button>
        );
    }
}