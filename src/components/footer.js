import * as React from "react"

const Footer = () => {
  return (
    <footer className="mt-auto py-3">
      <div className="container footer-wrapper">
        <div class="row mb-3">
          <div class="col-md-4 themed-grid-col">
            <p>Logo</p>
          </div>
          <div class="col-md-4 themed-grid-col">
            <ul>
                <li><a href>Privacy</a></li>
                <li><a href>Terms</a></li>
              </ul>
          </div>
          <div class="col-md-4 themed-grid-col">
            <p>My Company 2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer