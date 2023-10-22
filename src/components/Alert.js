import React from 'react'

export default function Alert(props) {
  return (
  props.alerttext &&  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alerttext}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
