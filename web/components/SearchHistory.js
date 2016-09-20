const B = require('../utils/Lotus.react')
const Select = require('react-select')
const Styles = require('../styles')
const calculateValues = require('../utils/calculateValues')
const n = require('../utils/n')
const scrollTop = require('../utils/scrollTop')
const dispatchableActions = require('../dispatchableActions')

function fromHistory(ev) {
  if (ev) {
    dispatchableActions.valuesReset()
    calculateValues(ev.value)
    scrollTop()
  }
}

function SearchHistory(props) {
  const options = props.searches.reduceRight((arr, search) => {
    return arr.concat({
      label: `${search.name} ${search.cp}CP ${search.hp}HP`,
      value: search,
    })
  }, [])

  return (
    n(B.View, [
      n(B.FormControl, { label: 'Recent Searches' }, [
        n(Select, {
          inputProps: {
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: 'off',
          },
          name: 'history',
          value: '',
          options,
          onChange: fromHistory,
        }),
      ]),
    ])
  )
}

module.exports = SearchHistory
