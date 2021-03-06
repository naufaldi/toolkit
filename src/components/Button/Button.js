/**
 * @copyright   2010-2017, The Titon Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 * @link        http://titon.io
 * @flow
 */

import React, { PropTypes } from 'react';
import style, { classes } from '../../styler';
import { sizeDefaults, sizePropTypes, classNamesPropType } from '../../propTypes';

import type { ButtonProps, ButtonState } from './types';

export class ToolkitButton extends React.PureComponent {
  props: ButtonProps;

  static propTypes = {
    ...sizePropTypes,
    children: PropTypes.node.isRequired,
    classNames: classNamesPropType.isRequired,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit']),
  };

  static defaultProps = {
    ...sizeDefaults,
    disabled: false,
    href: '',
    onClick() {},
    onMouseOver() {},
    onMouseOut() {},
    type: 'button',
  };

  state: ButtonState = {
    pressed: false,
  };

  handleMouseDown = () => {
    this.setState({
      pressed: true,
    });
  };

  handleMouseUp = () => {
    this.setState({
      pressed: false,
    });
  };

  render() {
    const { pressed } = this.state;
    const {
      children,
      classNames,
      disabled,
      small,
      large,
      href,
      type,
      onClick,
      onMouseOver,
      onMouseOut,
    } = this.props;
    let props = {
      onClick,
      onMouseOver,
      onMouseOut,
      role: 'button',
      className: classes(classNames.button, {
        [classNames.button__small]: small,
        [classNames.button__large]: large,
        [classNames.button__pressed]: pressed,
        [classNames.button__disabled]: disabled,
      }),
    };

    // If an anchor link
    if (href) {
      return (
        <a {...props} href={href}>
          {children}
        </a>
      );
    }

    // If a button
    props = {
      ...props,
      type,
      disabled,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      'aria-pressed': pressed,
    };

    return (
      <button {...props}>
        {children}
      </button>
    );
  }
}

export default style({
  button: 'button',
  button__small: 'button--small',
  button__large: 'button--large',
  button__pressed: 'is-pressed',
  button__disabled: 'is-disabled',
})(ToolkitButton);
