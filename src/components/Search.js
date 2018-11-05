import React from 'react'
import Autosuggest from 'react-autosuggest'
import { navigate, graphql } from 'gatsby'

import '../scss/components/_search.scss'

const getSuggestions = (value, regions) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  if (inputLength === 0) return []

  return regions.filter(({ name }) => {
    const segment = name.toLowerCase().slice(0, inputLength)
    return segment === inputValue
  })
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => {
  console.log(suggestion.name_ext)
  return (
    <div>
      {suggestion.name} <small>({suggestion.name_ext})</small>
    </div>
  )
}

const onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
  navigate(`/${suggestion.slug}`)
}

export default class Search extends React.Component {
  constructor({ regions }) {
    super()

    this.state = {
      value: '',
      suggestions: [],
      regions: regions.edges
        .map(edge => edge.node)
        .filter(region => region.name)
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
      suggestions: getSuggestions(value, this.state.regions)
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
  fragment RegionsFragment on RegionConnection {
    edges {
      node {
        id
        slug
        name
        name_ext
      }
    }
  }
`
