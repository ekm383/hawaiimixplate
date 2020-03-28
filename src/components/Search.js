import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import styled from "styled-components"
import { Link } from "gatsby"

class Search extends Component {
  state = {
    bookList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("/data/posts.json")
      .then(result => {
        const bookData = result.data
        this.setState({ bookList: bookData })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { bookList } = this.state
    const dataToSearch = new JsSearch.Search("isbn")
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")

    dataToSearch.addIndex("title") // sets the index attribute for the data
    dataToSearch.addIndex("author") // sets the index attribute for the data

    dataToSearch.addDocuments(bookList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { bookList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? bookList : searchResults
    return (
      <SearchWrapper>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="searchContainer cursor">
              <input
                type="text"
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                className="rq-form-element"
              />
              <i></i>
              <p>Results: {queryResults.length} Recipes</p>
            </div>
          </form>
          <div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "5px",
              }}
            >
              <thead>
                <tr>
                  <th>Cook Time</th>
                  <th>Recipe Name</th>
                  <th>Feeds</th>
                </tr>
              </thead>
              <tbody>
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.isbn}`}>
                      <td>
                        <Link to={`/recipes/${item.isbn}`}>{item.isbn}</Link>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.author}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  width: 80vw;
  .searchContainer {
    width: 80%;
    margin: -5rem auto 2rem auto;
    position: relative;
    z-index: 9999;
    p {
      font-size: 0.7rem;
      text-align: center;
      margin-top: 0.3rem;
    }
  }
  #Search {
    width: 100%;
    font-size: 1.1rem;
    padding: 1rem 0rem;
    text-align: center;
    border: 1px solid white;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
    &:focus {
      outline: none;
      border-color: var(--mainColor);
    }
  }
  tr {
    font-size: 1rem;
    height: 30px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th {
    text-transform: uppercase;
    font-family: "Poppins";
    font-weight: 700;
    color: var(--mainColor);
  }
  td {
    font-size: 0.9rem;
    padding-left: 0.3rem;
  }
  /* Blinking Cursor Style */
  .cursor {
    position: relative;
  }
  .cursor i {
    position: absolute;
    width: 1px;
    height: 1.4rem;
    background-color: #000000;
    left: 50%;
    top: 20%;
    animation-name: blink;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    opacity: 1;
  }
  .cursor input:focus + i {
    display: none;
  }
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export default Search
