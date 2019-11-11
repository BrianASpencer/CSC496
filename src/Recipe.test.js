import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import { exportAllDeclaration } from '@babel/types';
import { EXPECTED_COLOR } from 'jest-matcher-utils';


Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<div></div>, div)
});

it("renders", () => {
    const wrapper = mount(<Recipe 
        title={"Chicken Alfredo"}
                        />);
    expect(wrapper.find("h1").text()).toBe("Chicken Alfredo");
});

describe('Recipe', () => {
    it('should show text', () => {
        const wrapper = shallow(<Recipe 
            title={"Chicken Alfredo"}
            ingredients={"Chicken, Alfredo Sauce, Pasta"}
            />);
        const text = wrapper.find("h1");
        expect(text.text()).toBe("Chicken Alfredo");
        const text2 = wrapper.find("p");
        expect(text2.text()).toBe("Chicken, Alfredo Sauce, Pasta");
    })
});

test('snapshot renders', () => {
    const component = renderer.create(<Recipe />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });