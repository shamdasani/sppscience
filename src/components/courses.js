import React, { Component } from 'react'
import styled from 'styled-components'

const CourseForm = styled.div`
  padding-left: 5%;
  padding-top: 5%;
  padding-bottom: 2%;
  font-size: 20px;
`
const Highlight = styled.span`
  background-color: #ba4646;
  color: #fff;
  display: inline;
  padding: 3px;
  font-size: 20px;
`

const EligibileCourses = styled.div`
  padding-left: 5%;
`

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 'Sophomore',
      class: 'Biology',
      grade: 'A',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  render() {
    let classes
    if (this.state.year === 'Sophomore') {
      if (
        (this.state.grade === 'b-plus' &&
          this.state.class === 'Chemistry Honors') ||
        (this.state.grade === 'b-plus' && this.state.class === 'Biology Honors')
      ) {
        classes = (
          <div>
            <Highlight>AP Biology</Highlight> <br /> <br />
            <Highlight>AP Chemistry</Highlight> <br /> <br />
            <Highlight>AP Environmental Science</Highlight> <br /> <br />
            <Highlight>Advanced Chemistry II</Highlight> <br /> <br />
            <Highlight>Chemistry Honors</Highlight> <br /> <br />
            <Highlight>Chemistry</Highlight> <br /> <br />
            <Highlight>Biology Honors</Highlight> <br /> <br />
            <Highlight>Biology</Highlight> <br /> <br />
          </div>
        )
      } else if (this.state.grade === 'A') {
        classes = (
          <div>
            <Highlight>AP Biology</Highlight> <br /> <br />
            <Highlight>AP Chemistry</Highlight> <br /> <br />
            <Highlight>AP Environmental Science</Highlight> <br /> <br />
            <Highlight>Advanced Chemistry II</Highlight> <br /> <br />
            <Highlight>Chemistry Honors</Highlight> <br /> <br />
            <Highlight>Chemistry</Highlight> <br /> <br />
            <Highlight>Biology Honors</Highlight> <br /> <br />
            <Highlight>Biology</Highlight> <br /> <br />
          </div>
        )
      } else {
        classes = (
          <div>
            <Highlight>Chemistry</Highlight> <br /> <br />
            <Highlight>Biology</Highlight> <br /> <br />
          </div>
        )
      }
    } else if (this.state.year === 'Junior' || this.state.year === 'Senior') {
      if (
        (this.state.grade === 'b' && this.state.class === 'AP Chemistry') ||
        (this.state.grade === 'b' && this.state.class === 'AP Biology') ||
        (this.state.grade === 'b' &&
          this.state.class === 'AP Environmental Science')
      ) {
        classes = (
          <div>
            <Highlight>AP Physics I</Highlight> <br /> <br />
            <Highlight>AP Biology</Highlight> <br /> <br />
            <Highlight>AP Chemistry</Highlight> <br /> <br />
            <Highlight>AP Environmental Science</Highlight> <br /> <br />
            <Highlight>Physics I Honors</Highlight> <br /> <br />
            <Highlight>Physics I</Highlight> <br /> <br />
            <Highlight>Advanced Chemistry II</Highlight> <br /> <br />
            <Highlight>Chemistry Honors</Highlight> <br /> <br />
            <Highlight>Chemistry</Highlight> <br /> <br />
            <Highlight>Advanced Biology II</Highlight> <br /> <br />
            <Highlight>Biology Honors</Highlight> <br /> <br />
            <Highlight>Biology</Highlight> <br /> <br />
            <Highlight>Forensic Science</Highlight> <br /> <br />
            <Highlight>Anatomy & Physiology</Highlight> <br /> <br />
          </div>
        )
      } else if (
        (this.state.grade === 'b-plus' &&
          this.state.class === 'Chemistry Honors') ||
        (this.state.grade === 'b-plus' &&
          this.state.class === 'Biology Honors') ||
        (this.state.grade === 'b-plus' &&
          this.state.class === 'Physics Honors') ||
        (this.state.grade === 'b-plus' &&
          this.state.class === 'AP Chemistry') ||
        (this.state.grade === 'b-plus' && this.state.class === 'AP Biology') ||
        (this.state.grade === 'b-plus' &&
          this.state.class === 'AP Environmental Science')
      ) {
        classes = (
          <div>
            <Highlight>AP Physics I</Highlight> <br /> <br />
            <Highlight>AP Biology</Highlight> <br /> <br />
            <Highlight>AP Chemistry</Highlight> <br /> <br />
            <Highlight>AP Environmental Science</Highlight> <br /> <br />
            <Highlight>Physics I Honors</Highlight> <br /> <br />
            <Highlight>Physics I</Highlight> <br /> <br />
            <Highlight>Advanced Chemistry II</Highlight> <br /> <br />
            <Highlight>Chemistry Honors</Highlight> <br /> <br />
            <Highlight>Chemistry</Highlight> <br /> <br />
            <Highlight>Advanced Biology II</Highlight> <br /> <br />
            <Highlight>Biology Honors</Highlight> <br /> <br />
            <Highlight>Biology</Highlight> <br /> <br />
            <Highlight>Forensic Science</Highlight> <br /> <br />
            <Highlight>Anatomy & Physiology</Highlight> <br /> <br />
          </div>
        )
      } else if (this.state.grade === 'A') {
        classes = (
          <div>
            <Highlight>AP Physics I</Highlight> <br /> <br />
            <Highlight>AP Biology</Highlight> <br /> <br />
            <Highlight>AP Chemistry</Highlight> <br /> <br />
            <Highlight>AP Environmental Science</Highlight> <br /> <br />
            <Highlight>Physics I Honors</Highlight> <br /> <br />
            <Highlight>Physics I</Highlight> <br /> <br />
            <Highlight>Advanced Chemistry II</Highlight> <br /> <br />
            <Highlight>Chemistry Honors</Highlight> <br /> <br />
            <Highlight>Chemistry</Highlight> <br /> <br />
            <Highlight>Advanced Biology II</Highlight> <br /> <br />
            <Highlight>Biology Honors</Highlight> <br /> <br />
            <Highlight>Biology</Highlight> <br /> <br />
            <Highlight>Forensic Science</Highlight> <br /> <br />
            <Highlight>Anatomy & Physiology</Highlight> <br /> <br />
          </div>
        )
      } else {
        classes = (
          <div>
            <Highlight>Anatomy & Physiology</Highlight> <br /> <br />
            <Highlight>Forensic Science</Highlight> <br /> <br />
            <Highlight>Physics</Highlight> <br /> <br />
            <Highlight>Chemistry</Highlight> <br /> <br />
            <Highlight>Biology</Highlight> <br /> <br />
          </div>
        )
      }
    }

    return (
      <div>
        <CourseForm>
          <form className="form">
            <label>
              What is your <Highlight> class year? </Highlight>
              <br />
              <select
                name="year"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="Sophomore">2021</option>
                <option value="Junior">2020</option>
                <option value="Senior">2019</option>
              </select>
            </label>
            <br />
            <br />

            <label>
              Hello, rising <Highlight> {this.state.year} </Highlight>! What is
              your <Highlight> current science class </Highlight>?
              <br />
              <select
                name="class"
                value={this.state.class}
                onChange={this.handleChange}
              >
                <option value="Biology">Biology</option>
                <option value="Biology Honors">Biology Honors</option>
                <option value="Advanced Biolog">Advanced Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Chemistry Honors">Chemistry Honors</option>
                <option value="Advanced Chemistry">Advanced Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Physics Honors">Physics Honors</option>
                <option value="Anatomy">Anatomy</option>
                <option value="Forensics">Forensics</option>
                <option value="AP Environmental Science">
                  AP Environmental Science
                </option>
                <option value="AP Biology">AP Biology</option>
                <option value="AP Chemistry">AP Chemistry</option>
                <option value="AP Physics I">AP Physics I</option>
              </select>
            </label>
            <br />
            <br />

            <label>
              What is your current grade in{' '}
              <Highlight> {this.state.class} </Highlight> ? <br />
              <select
                name="grade"
                value={this.state.grade}
                onChange={this.handleChange}
              >
                <option value="A">A+</option>
                <option value="b-plus">B+</option>
                <option value="b">B</option>
                <option value="c">C</option>
              </select>
            </label>
          </form>
        </CourseForm>
        <EligibileCourses>
          <p> You are eligible for the following: </p>
          <br />

          {classes}
        </EligibileCourses>
      </div>
    )
  }
}

export default Courses
