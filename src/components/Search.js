import React from 'react'
import Autosuggest from 'react-autosuggest'
import { navigateTo } from 'gatsby-link'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, districts) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  if (inputLength === 0) return []

  return districts.filter(({ name }) => {
    const segment = name.toLowerCase().slice(0, inputLength)
    return segment === inputValue
  })
}

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>

const onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
  navigateTo(`/${suggestion.slug}`)
}

export default class Search extends React.Component {
  constructor({ districts }) {
    super()

    this.state = {
      value: '',
      suggestions: [],
      districts: districts.edges
        .map(edge => edge.node)
        .filter(district => district.name)
        .sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue })
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.state.districts)
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
        onSuggestionSelected={onSuggestionSelected}
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
