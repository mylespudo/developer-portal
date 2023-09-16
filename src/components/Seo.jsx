import {
  MYLES_DESCRIPTION,
  MYLES_TAGLINE,
  MYLES_TITLE,
  WEBSITE_URL,
  FB_APPID,
} from '@/constants'
import PropTypes from 'prop-types'
import Head from 'next/head'

const MAX_LENGTH_META_DESCRIPTION = 150

export function Seo({
  title: propTitle,
  description: propDescription,
  relativeUrl,
  twitterAppId,
  imageUrl: propImageUrl,
}) {
  const title = `${
    propTitle ? `${propTitle} |` : ''
  } ${MYLES_TITLE} - ${MYLES_TAGLINE}`
  
  const description = propDescription ?? MYLES_DESCRIPTION

  const truncateDescription =
    description.length > MAX_LENGTH_META_DESCRIPTION
      ? description.slice(0, MAX_LENGTH_META_DESCRIPTION) + '...'
      : '...' + description.slice(0, MAX_LENGTH_META_DESCRIPTION)

  const fullUrl = `${WEBSITE_URL}${relativeUrl ?? ''}`

  const imageUrl = propImageUrl ?? '/apple-touch-icon.png'

  return (
    <Head>
      <link href={fullUrl} rel="canonical" />
      <meta content={fullUrl} name="url" />
      <meta content={title} property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content={fullUrl} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={truncateDescription} property="og:description" />
      <meta content={imageUrl} property="og:image" />
      <meta content="200" property="og:image:height" />
      <meta content="200" property="og:image:width" />
      <meta content="@MylesPudo" name="twitter:site" />
      <meta content="summary" name="twitter:card" />
      <meta content="@YouVersion" name="twitter:creator" />
      <meta content={title} name="twitter:title" />
      <meta content={imageUrl} name="twitter:image" />
      <meta content={fullUrl} name="twitter:url" />
      <meta content={truncateDescription} name="twitter:description" />
      <meta content={MYLES_TITLE} name="twitter:app:name:iphone" />
      <meta content={twitterAppId} name="twitter:app:id:iphone" />
      <meta content={MYLES_TITLE} name="twitter:app:name:ipad" />
      <meta content={twitterAppId} name="twitter:app:id:ipad" />
      <meta content={MYLES_TITLE} name="twitter:app:name:googleplay" />
      <meta content={twitterAppId} name="twitter:app:id:googleplay" />
      <meta content={FB_APPID} name="fb:app_id" />

      <meta content={truncateDescription} name="description" />
      <meta content={title} name="title" />
      <meta content={imageUrl} name="image" />
      <meta content={fullUrl} name="url" />

      <title>{title}</title>
    </Head>
  )
}

Seo.propTypes = {
  // meta title
  title: PropTypes.string,
  // meta description
  description: PropTypes.string,
  // set for each page.
  relativeUrl: PropTypes.string,
  // Get this from https://developer.twitter.com/en/apps
  twitterAppId: PropTypes.string,
  // image to show in link previews.
  imageUrl: PropTypes.string,
}
