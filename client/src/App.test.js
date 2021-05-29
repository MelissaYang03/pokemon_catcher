import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



/*test("renders the correct menu button", () => {
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);

  expect(root.querySelector("button").textContent).toContain("Pokemon List");
})*/

test("renders the correct content", () => {

  const { getByText } = render(<App/>);

  expect(getByText("Pokemon List")).not.toBeNull();

})


//test("renders the correct content at app", () => {})