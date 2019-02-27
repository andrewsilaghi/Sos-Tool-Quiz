export const intensities = {
  maximum: 'MAXIMUM',
  medium: 'MEDIUM',
  minimum: 'MINIMUM'
}

export const screens = {
  quiz: 'QUIZ',
  result: 'RESULT'
}

export const levels = {
  one: '1',
  two: '2',
  three: '3'
}

export const colors = {
  [intensities.minimum]: '#8ee2b1',
  [intensities.medium]: '#bbc117',
  [intensities.maximum]: '#ee9232'
}

export const quotes = {
  [intensities.minimum]:
    'Care for in the group; consult with your small group coach.',
  [intensities.medium]:
    'Consult with small group coach; possibly refer to BSC for formal counseling.',
  [intensities.maximum]: 'Refer to pastor/elder or BSC for formal counseling.'
}
export const length = {
  [intensities.minimum]: 'Issue should be on better trajectory within 2-3 meetings.',
  [intensities.medium]: 'Issue should be on better trajectory within 3-5 meetings.',
  [intensities.maximum]: 'Depends on Counselor (usually over 12 sessions).'
}
