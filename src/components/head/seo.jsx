import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const Seo = ({ title, description, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image, siteUrl
  } = useSiteMetadata()

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={`${siteUrl}${image}`} />
      {children}
    </>
  )
}
