import React from 'react';
import { render } from '@testing-library/react';
import PokemonList from '../PokemonList';

test("renders the correct content", () => {

    const { getByText } = render(<PokemonList/>);
  
    const linkElement = getByText("List of Pokemon");

    expect(linkElement).toBeInTheDocument();
  
  })