import React from 'react';
import { ProgressBarAndroid } from 'react-native';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const noop = () => {};

import { Button } from '../src/Button';

describe('Button Component', () => {
  it('renders the component', () => {
    const wrapper = shallow(
      <Button text="Button Text" onPress={noop} />
    );
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains('Button Text')).to.be.true();
  });

  it('shows spinner and loading text while loading', () => {
    const wrapper = shallow(
      <Button text="Button Text" loadingText="I'm Loading" onPress={noop} loading />
    );
    expect(wrapper.find(ProgressBarAndroid).length).to.equal(1);
    expect(wrapper.contains('I\'m Loading')).to.be.true();
  });

  it('invokes callback on push', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(
      <Button
        text="Button Text"
        onPress={onPress}
      />
    );
    wrapper.simulate('press');
    expect(onPress.calledOnce).to.be.true();
  });

  it('does not invoke callback on push when disabled', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(
      <Button
        text="Button Text"
        onPress={onPress}
        disabled
      />
    );
    wrapper.simulate('press');
    expect(onPress.callCount).to.equal(0);
  });

  it('does not invoke callback on push when loading', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(
      <Button
        text="Button Text"
        onPress={onPress}
        loading
      />
    );
    wrapper.simulate('press');
    expect(onPress.callCount).to.equal(0);
  });
});
