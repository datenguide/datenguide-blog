import React from 'react'
import Autosuggest from 'react-autosuggest'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, districts) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  if (inputLength === 0) return []

  return districts.filter(district => {
    const segment = getSegment(district.name, inputLength)
    return segment === inputValue
  })
}

const getSegment = (name, inputLength) =>
  name && name.toLowerCase().slice(0, inputLength)

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>

export default class Search extends React.Component {
  constructor() {
    super()

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.

    this.state = { value: '', suggestions: [] }
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue })
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    const districts = this.props.districts.edges.map(edge => edge.node)
    this.setState({
      suggestions: getSuggestions(value, districts)
    })
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Stadt oder Landkreis',
      value,
      onChange: this.onChange
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}

export const query = graphql`
  fragment DistrictsFragment on DistrictConnection {
    edges {
      node {
        id
        slug
        name
      }
    }
  }
`
