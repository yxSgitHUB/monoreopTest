import React from "react"
import { expect } from "chai"
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestReact from "../app/testReact";
configure({ adapter: new Adapter() });


describe('react-test', function () {
    const wrapper = shallow(<TestReact />);
    it('should mount right', function () {
        expect(wrapper.find('div').text()).to.equal("1111");
    });
    it('should mount property right', function () {
        expect(wrapper.state()).to.equal(null);
    });
})