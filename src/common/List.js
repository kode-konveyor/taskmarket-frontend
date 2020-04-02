import React from 'react'
import PropTypes from 'prop-types'

export default function List ({ Of, className, data }) {
  const list = Array.isArray(data) ? data.map((item, i) => <li key={i}><Of {...item}/></li>) : []

  return <ul className={className}> {list}</ul>
}

List.propTypes = {
  Of: PropTypes.elementType,
  className: PropTypes.string,
  data: PropTypes.array
}
