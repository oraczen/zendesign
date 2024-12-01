import { render } from '@testing-library/react'
import HelloWorld from '../../../components/sample/hello-world'
 
it('renders homepage unchanged', () => {
  const { container } = render(<HelloWorld />)
  expect(container).toMatchSnapshot()
})