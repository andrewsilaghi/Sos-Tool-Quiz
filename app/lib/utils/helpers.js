import { intensities, levels, quotes, length } from './enums'

export const getIntensity = (value) => {
  const boundaries = {
    [intensities.minimum]: 1,
    [intensities.medium]: 4,
    [intensities.maximum]: 7
  }
  if (value < boundaries[intensities.medium]) {
    return intensities.minimum
  } else if (value < boundaries[intensities.maximum]) {
    return intensities.medium
  } else {
    return intensities.maximum
  }
}

export const getScore = (score) =>
  score.severity + score.ownership + score.support

export const getLevel = (score) => {
  const boundaries = {
    [levels.one]: 9,
    [levels.two]: 16,
    [levels.three]: 24
  }
  if (score < boundaries[levels.two]) {
    return levels.one
  } else if (score < boundaries[levels.three]) {
    return levels.two
  } else {
    return levels.three
  }
}

export const getQuote = (score) => {
  const total = getScore(score)
  const boundaries = {
    [intensities.minimum]: 1,
    [intensities.medium]: 16,
    [intensities.maximum]: 25
  }
  if (total < boundaries[intensities.medium]) {
    return quotes[intensities.minimum]
  } else if (total < boundaries[intensities.maximum]) {
    return quotes[intensities.medium]
  } else {
    return quotes[intensities.maximum]
  }
}
export const getLength = (score) => {
  const total = getScore(score)
  const boundaries = {
    [intensities.minimum]: 1,
    [intensities.medium]: 16,
    [intensities.maximum]: 25
  }
  if (total < boundaries[intensities.medium]) {
    return length[intensities.minimum]
  } else if (total < boundaries[intensities.maximum]) {
    return length[intensities.medium]
  } else {
    return length[intensities.maximum]
  }
}
