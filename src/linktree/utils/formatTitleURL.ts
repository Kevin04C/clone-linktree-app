export const formatTitleUrl = (url: string): string => {
  const formatURL = new URL(url)
  const hostnameSplited = formatURL.hostname.split('.')
  const titleLink = hostnameSplited.length === 3 ? hostnameSplited[1] : hostnameSplited[0]
  return titleLink
}
