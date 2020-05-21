import React from 'react'
import { Document, Page } from 'react-pdf/dist/entry.webpack'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import TopNav from '../common/Topnav'

export default class Privacy extends React.Component {
  constructor() {
    super()
    this.state = {
      numPages: null,
      pageNumber: 1
    }
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  onDocumentLoadSuccess({ numPages }){
    this.setState({ numPages })
  }
  nextPage(){
    this.state.pageNumber < this.state.numPages && this.setState({ pageNumber: this.state.pageNumber + 1 })
  }
  prevPage(){
    this.state.pageNumber > 1 && this.setState({ pageNumber: this.state.pageNumber - 1 })
  }

  //funct
  render() {
    const { pageNumber, numPages } = this.state
    console.log('number of pages', numPages)
    return (
      <>
        <TopNav />
        <div className='container-fluid'>
          <div className='row hero-video'>
            <div className='hero'>
              <div className='video'>
                <div className='overlay'>
                  <img
                    src='../assets/logo_bw.png'
                    className='animated fadeIn logo'
                    id='hero-logo'
                  />
                </div>
                <img
                  className='hero'
                  src='https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                />
              </div>
            </div>
          </div>
          
          <div className='policy-pdf'>
            <div className='pdf-controls'>
              <span onClick={this.prevPage}>Previous Page </span>
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <span onClick={this.nextPage}>Next Page</span>
            </div>

            <div className='row'>
              <Document
                file='../../assets/policy.pdf'
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </div>
        </div>
          <Footer />
      </>
    )
  }
}
