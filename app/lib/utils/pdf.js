import dateformat from 'dateformat'

import { getScore, getQuote, getIntensity } from '../utils/helpers'
import { colors } from '../utils/enums'

const config = {
  styles: {
    body: {
      fontSize: 10,
      margin: [0, 0, 0, 5]
    },
    body2: {
      fontSize: 8,
      italics: true
    },
    group: {
      margin: [0, 0, 0, 10]
    },
    cell: {
      fontSize: 10,
      alignment: 'center'
    },
    table: {
      margin: [0, 5, 0, 0]
    },
    separator: {
      margin: [0, 20, 0, 0]
    }
  }
}

const separator = () => [{ text: '', style: 'separator' }]

const breakPoint = () => [{ text: '', pageBreak: 'after' }]

const paragraph = (label, value) => [
  { text: label, style: 'body', bold: true },
  {
    text: [{ text: value, style: 'body' }],
    style: 'group'
  }
]

const scoreCell = (label, value) => [
  {
    table: {
      widths: ['20%', ...Array(10).fill('8%')],
      body: [
        [
          { text: label, style: 'cell' },
          ...Array(10)
            .fill()
            .map((i, score) => ({
              text: score + 1,
              fillColor:
                score <= value - 1 ? colors[getIntensity(value - 1)] : 'lightgrey',
              style: 'cell'
            }))
        ]
      ]
    },
    style: 'table'
  }
]

const question = (title) => [
  { text: title, style: 'body', bold: true },
  {
    text: [
      {
        text:
          '______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        style: 'body'
      }
    ],
    style: 'group'
  }
]

const totalCell = (score) => [
  {
    table: {
      widths: ['20%', '5%', '75%'],
      body: [
        [
          { text: 'Total Score', style: 'body' },
          { text: getScore(score), style: 'body' },
          { text: getQuote(score), style: 'body' }
        ]
      ]
    },
    style: 'table'
  }
]

const copyright = () => [
  {
    text:
      '*SOS is intended as an instructional tool to help you collaborate with others. This report does not constitute a formal request or prescription for care. If formal care is needed, submit a Referral at: harvestbiblechapel.org/BSCreferral.',
    style: 'body2'
  }
]

const createPdf = (form, score) => {
  const definition = {
    content: [
      ...paragraph('SOS Report Date:', dateformat(new Date())),
      ...paragraph('Completed on behalf of', form.name2),
      ...paragraph('Completed by', form.name),
      ...separator(),
      ...scoreCell('Severity', score.severity),
      ...scoreCell('Ownership', score.ownership),
      ...scoreCell('Support', score.support),
      ...separator(),
      ...totalCell(score),
      ...breakPoint(),
      ...question(
        'What are you observing about this person (presenting issue)?'
      ),
      ...separator(),
      ...question('Why did you choose this severity score?'),
      ...separator(),
      ...question('Why did you choose this ownership score?'),
      ...separator(),
      ...question('Why did you choose this support score?'),
      ...separator(),
      ...question('What care has been provided so far?'),
      ...separator(),
      ...copyright()
    ],
    ...config
  }

  return pdfMake.createPdf(definition).download(`document-${Date.now()}.pdf`)
}

export default createPdf
