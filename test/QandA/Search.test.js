import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../client/src/components/Q&A/Search.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('<Search />', () => {

  let component;

  beforeEach(() => {
    component = render(<Search />);
  });

  it ('renders Search component', () => {
    const searchBar = component.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });
});