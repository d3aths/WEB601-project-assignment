import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Fantasy Keycaps',
  description: 'We sell the best products',
  keywords: 'shopping, buy, cheap, keycaps, keyboard, RGB, computer parts, gaming',
}

export default Meta
