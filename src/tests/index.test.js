import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import dog from './dog';
import App from '../App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  states: dog,
  shareState: {
    city: 'New York',
    state_full: 'New York',
    state: 'NY',
    picked: true,
  },
  pets: dog,
});

describe('Testing components rendering', () => {
  test('States', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Testing buttons', () => {
  test('Pick States', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Alaska'));
    const firedAction = store.getActions();
    expect(firedAction.length).not.toBe(0);
  });
  test('State Picked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.queryByLabelText('Alaska')).not.toBeInTheDocument();
  });
});
