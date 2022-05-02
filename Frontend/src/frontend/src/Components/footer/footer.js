import './footer.css'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <ul>
        <Link to='/terms'><li>Terms Of Service</li></Link>
        <Link to='/policy'><li>Privacy Policy</li></Link>
      </ul>
      <span>&copy; 2022 FFDEV Inc.</span>
    </footer>
  )
}

export default Footer
