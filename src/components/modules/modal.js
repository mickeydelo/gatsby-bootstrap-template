import * as React from "react"

function Modal (props) {
  return (
    <>
      {/* External Modal */}
      <div class="modal fade" id="externalModal" tabindex="-1" aria-labelledby="externalModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="externalModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              You are now leaving the site.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href={`${ props.url }`} target="_blank">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Modal */}
      <div class="modal fade" id="internalModal" tabindex="-1" aria-labelledby="internalModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="internalModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Hello, world! This is a Bootstrap modal.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">OK</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal