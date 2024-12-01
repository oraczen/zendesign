// components/HelloWorld.test.tsx
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import HelloWorld from '../../../components/sample/hello-world';

describe('HelloWorld Component', () => {
  it('renders the hello world message', () => {
    render(<HelloWorld/>);
    
    const message = screen.getByRole('heading', { level: 1 });

    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(/hello, world!/i);
  });
});
