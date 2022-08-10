import * as React from "react"

function ImageText (props) {
  return (
    <div className="container my-5 py-5">
      <div class="row featurette">
        <div class="col-md-7 order-md-2 center-responsive">
          <h2 class="featurette-heading">{props.header} <span class="text-muted">{props.subhead}</span></h2>
          <p class="lead">{props.copy}</p>
          <button className={`${ props.btnStyle }`}>
            {props.btnName}
          </button>
        </div>
        <div className={`col-md-5 center-responsive ${ props.imgPos }`}>
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={props.image} alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default ImageText