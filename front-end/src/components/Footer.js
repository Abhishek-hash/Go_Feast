import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <div>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fst-italic">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      
      </Link>
      <span className="mb-3 mb-md-0 text-muted">© 2024 Go-Feast, Inc</span>
    </div>

    {/*<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>*/}
  </footer>

    </div>
  )
}
 
export default Footer
