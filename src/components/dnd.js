import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'

const CoursesContainer = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 20px;
`
const Highlight = styled.span`
  background-color: #ba4646;
  color: #fff;
  display: inline-block;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  transition: all 300ms ease;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
const YearsContainer = styled.div`
  height: 200px;
`

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  border: 3px solid #e4e4e4;
  color: #333;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
  background-color: #fff;
  z-index: 500;
  display: inline;
  &:hover {
    background: #fff;
    border: 3px solid #438cee;
    color: #333;
    transition: all 300ms ease;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

const Year = styled.div`
  height: 120px;
  text-align: center;
  border-radius: 10px;
  background: #fcfcfc;
  -moz-box-shadow: 0 0 5px #e4e4e4;
  -webkit-box-shadow: 0 0 5px #e4e4e4;
  box-shadow: 0 0 5px #e4e4e4;
  transition: all 200ms ease;
  margin: 10px;
  &:hover {
    -moz-box-shadow: 0 0 30px #e4e4e4;
    -webkit-box-shadow: 0 0 30px #e4e4e4;
    box-shadow: 0 0 30px #e4e4e4;
  }
`

const Class = styled.div`
  padding: 10px;
`

class DragDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: [
        { no: 0, text: 'Physical Science', type: 'reg', tier: 'fresh' },
        {
          no: 1,
          text: 'Biology',
          regularGrade: 'passing',
          honors: 'passing',
          AP: 'passing',
          type: 'reg',
          tier: '1',
        },
        {
          no: 2,
          text: 'Biology Honors',
          type: 'honors',
          tier: '1',
          regularGrade: 'A',
          honors: 'B+',
          AP: 'B',
        },
        {
          no: 3,
          text: 'Advanced Biology II',
          type: 'advanced',
          tier: '2',
          regularGrade: 'passing',
          honors: 'passing',
          AP: 'passing',
        },
        {
          no: 4,
          text: 'Chemistry',
          regularGrade: 'passing',
          honors: 'passing',
          AP: 'passing',
          type: 'reg',
          tier: '1',
        },
        {
          no: 5,
          text: 'Chemistry Honors',
          type: 'honors',
          tier: '1',
          regularGrade: 'A',
          honors: 'B+',
          AP: 'B',
        },
        {
          no: 6,
          text: 'Advanced Chemistry II',
          type: 'advanced',
          tier: '2',
          regularGrade: 'passing',
          honors: 'passing',
          AP: 'passing',
        },
        {
          no: 7,
          text: 'Physics I',
          regularGrade: 'passing',
          honors: 'passing',
          AP: 'passing',
          type: 'reg',
          tier: '2',
        },
        {
          no: 8,
          text: 'Physics I Honors',
          regularGrade: 'A',
          honors: 'B+',
          AP: 'B',
          type: 'honors',
          tier: '2',
        },
        {
          no: 9,
          text: 'Anatomy & Physiology',
          type: 'reg',
          tier: '2',
          regularGrade: 'passing',
          honors: 'passing',
          AP: 'passing',
        },
        {
          no: 10,
          text: 'Forensic Science',
          type: 'reg',
          tier: '2',
          regularGrade: 'passing',
          honors: 'passing',
          AP: 'passing',
        },
        {
          no: 11,
          text: 'AP Environmental Science',
          type: 'AP',
          tier: '1',
          regularGrade: 'A+',
          honors: 'B+',
          AP: 'B',
        },
        {
          no: 12,
          text: 'AP Biology',
          type: 'AP',
          tier: '1',
          regularGrade: 'A+',
          honors: 'B+',
          AP: 'B',
        },
        {
          no: 13,
          text: 'AP Chemistry',
          type: 'AP',
          tier: '1',
          regularGrade: 'A+',
          honors: 'B+',
          AP: 'B',
        },
        {
          no: 14,
          text: 'AP Physics I',
          type: 'AP',
          tier: '2',
          regularGrade: 'A+',
          honors: 'B+',
          AP: 'B',
        },
      ],
      freshman: [],
      sophomore: [],
      junior: [],
      senior: [],
    }
  }

  onDragStart = (e, v, n) => {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.setData('text/plain', v)
    e.dataTransfer.setData('integer', n)
  }

  allowDrop = ev => {
    ev.preventDefault()
  }

  onClear = e => {
    this.setState({
      freshman: [],
      sophomore: [],
      junior: [],
      senior: [],
    })
  }

  onDropFreshman = e => {
    let data = e.dataTransfer.getData('text/plain')
    data = data.toString()
    if (data === 'Physical Science' || data === 'Chemistry Honors') {
      let { freshman } = this.state
      freshman.push(data)
      this.setState({ freshman })
    } else {
      alert('You cannot take this course as a freshman.')
    }
  }

  onDropSophomore = e => {
    e.preventDefault()
    let data = e.dataTransfer.getData('text/plain')
    let index = e.dataTransfer.getData('integer')
    let object = this.state.classes[Object.keys(this.state.classes)[index]]
    console.log(object)
    if (object.tier === '1') {
      if (
        object.text === 'AP Chemistry' &&
        this.state.freshman[0] != 'Chemistry Honors'
      ) {
        alert(
          'You must take Chemistry (A+) or Chemistry Honors (B+) first to take AP Chemistry.'
        )
      } else if (
        object.text === 'AP Chemistry' &&
        this.state.freshman[0] === 'Chemistry Honors'
      ) {
        let { sophomore } = this.state
        sophomore.push(object)
        this.setState({ sophomore })
        alert(
          'You need a minimum grade of ' +
            object.honors +
            ' in ' +
            this.state.freshman[0] +
            ' to take ' +
            this.state.sophomore[0].text +
            '.'
        )
      } else {
        let { sophomore } = this.state
        sophomore.push(object)
        this.setState({ sophomore })
        alert(
          'You need a minimum grade of ' +
            object.regularGrade +
            ' in ' +
            this.state.freshman[0] +
            ' to take ' +
            this.state.sophomore[0].text +
            '.'
        )
      }
    } else {
      alert(
        'You cannot take this course before taking a Tier A Course (Chemistry, Chemistry Honors, AP Chemistry, Biology, Biology Honors, AP Biology, AP Environmental Science)'
      )
    }
  }

  onDropJunior = e => {
    e.preventDefault()
    let data = e.dataTransfer.getData('text/plain')
    let index = e.dataTransfer.getData('integer')
    let object = this.state.classes[Object.keys(this.state.classes)[index]]

    if (object.type === 'advanced') {
      if (
        this.state.freshman[0].text === 'Chemistry Honors' ||
        this.state.sophomore[0].text === 'Biology' ||
        this.state.sophomore[0].text === 'Biology Honors' ||
        this.state.sophomore[0].text === 'Chemistry' ||
        this.state.sophomore[0].text === 'Chemistry Honors' ||
        this.state.sophomore[0].text === 'AP Chemistry' ||
        this.state.sophomore[0].text === 'AP Biology'
      ) {
        let { junior } = this.state
        junior.push(object)
        this.setState({ junior })
        alert(
          'You need a minimum grade of ' +
            object.regularGrade +
            ' in ' +
            this.state.sophomore[0].text +
            ' to take ' +
            this.state.junior[0].text +
            '.'
        )
      } else {
        alert(
          'You must take a Biology or Chemistry course before taking an advanced class.'
        )
      }
    } else if (object.no === 10) {
      let bioSubstring = 'logy'
      let chemSubstring = 'istry'
      let sophomoreText = this.state.sophomore[0].text
      let freshmanText = this.state.freshman[0]
      if (
        sophomoreText.indexOf(bioSubstring) !== -1 &&
        freshmanText.indexOf(chemSubstring) !== -1
      ) {
        let { junior } = this.state
        junior.push(object)
        this.setState({ junior })
        alert(
          'You need a minimum grade of ' +
            object.regularGrade +
            ' in ' +
            sophomoreText +
            ' to take ' +
            this.state.junior[0].text +
            '.'
        )
      } else {
        alert(
          'You must take a Chemistry and Biology course before you take Forensic Science.'
        )
      }
    }

    if (
      (object.tier === '1' &&
        object.type != 'advanced' &&
        object.text != 'Forensic Science') ||
      (this.state.sophomore[0].tier === '1' &&
        object.type != 'advanced' &&
        object.text != 'Forensic Science')
    ) {
      if (
        object.text === 'AP Chemistry' &&
        this.state.sophomore[0].text != 'Chemistry Honors' &&
        this.state.sophomore[0].text != 'Chemistry' &&
        this.state.freshman[0].text != 'Chemistry Honors'
      ) {
        alert(
          'You must take Chemistry (A+) or Chemistry Honors (B+) first to take AP Chemistry.'
        )
      } else {
        let { junior } = this.state
        junior.push(object)
        this.setState({ junior })
        if (this.state.sophomore[0].type === 'reg') {
          alert(
            'You need a minimum grade of ' +
              object.regularGrade +
              ' in ' +
              this.state.sophomore[0].text +
              ' to take ' +
              this.state.junior[0].text +
              '.'
          )
        } else if (this.state.sophomore[0].type === 'honors') {
          alert(
            'You need a minimum grade of ' +
              object.honors +
              ' in ' +
              this.state.sophomore[0].text +
              ' to take ' +
              this.state.junior[0].text +
              '.'
          )
        } else if (this.state.sophomore[0].type === 'AP') {
          alert(
            'You need a minimum grade of ' +
              object.AP +
              ' in ' +
              this.state.sophomore[0].text +
              ' to take ' +
              this.state.junior[0].text +
              '.'
          )
        } else {
          alert(
            'You cannot take this course before taking a Tier A Course (Chemistry, Chemistry Honors, AP Chemistry, Biology, Biology Honors, AP Biology, AP Environmental Science)'
          )
        }
      }
    }
  }

  onDropSenior = e => {
    e.preventDefault()
    let data = e.dataTransfer.getData('text/plain')
    let index = e.dataTransfer.getData('integer')
    let object = this.state.classes[Object.keys(this.state.classes)[index]]
    console.log(object)
    if (object.no === 10) {
      let bioSubstring = 'logy'
      let chemSubstring = 'istry'
      let sophomoreText = this.state.sophomore[0].text
      let freshmanText = this.state.freshman[0]
      let juniorText = this.state.junior[0].text
      if (
        (sophomoreText.indexOf(bioSubstring) !== -1 &&
          freshmanText.indexOf(chemSubstring) !== -1) ||
        (juniorText.indexOf(bioSubstring) !== -1 &&
          freshmanText.indexOf(chemSubstring) !== -1) ||
        (juniorText.indexOf(bioSubstring) !== -1 &&
          sophomoreText.indexOf(chemSubstring) !== -1) ||
        (sophomoreText.indexOf(bioSubstring) !== -1 &&
          juniorText.indexOf(chemSubstring) !== -1)
      ) {
        let { senior } = this.state
        senior.push(object)
        this.setState({ senior })
        alert(
          'You need a minimum grade of ' +
            object.regularGrade +
            ' in ' +
            this.state.junior[0].text +
            ' to take ' +
            this.state.senior[0].text +
            '.'
        )
      } else {
        alert(
          'You must take a Chemistry and Biology course before you take Forensic Science.'
        )
      }
    } else {
      let { senior } = this.state
      senior.push(object)
      this.setState({ senior })
      if (this.state.junior[0].type === 'reg') {
        alert(
          'You need a minimum grade of ' +
            object.regularGrade +
            ' in ' +
            this.state.junior[0].text +
            ' to take ' +
            this.state.senior[0].text +
            '.'
        )
      } else if (this.state.junior[0].type === 'honors') {
        alert(
          'You need a minimum grade of ' +
            object.honors +
            ' in ' +
            this.state.junior[0].text +
            ' to take ' +
            this.state.senior[0].text +
            '.'
        )
      } else {
        alert(
          'You need a minimum grade of ' +
            object.AP +
            ' in ' +
            this.state.junior[0].text +
            ' to take ' +
            this.state.senior[0].text +
            '.'
        )
      }
    }
  }

  render() {
    const { classes, freshman, sophomore, junior, senior } = this.state

    let sophomoreLabel
    if (sophomore[0] !== undefined) {
      sophomoreLabel = sophomore[0].text
    } else {
      sophomoreLabel = null
    }

    let juniorLabel
    if (junior[0] !== undefined) {
      juniorLabel = junior[0].text
    } else {
      juniorLabel = null
    }

    let seniorLabel
    if (senior[0] !== undefined) {
      seniorLabel = senior[0].text
    } else {
      seniorLabel = null
    }

    return (
      <CoursesContainer>
        <div>
          <h3>
            {' '}
            Drag and drop the science classes you'd like to take during your
            four years at Prep.{' '}
          </h3>
          <p>
            {' '}
            You must take at least at least one life science (Biology,
            Environmental Science, Forensic Science, Anatomy & Physiology) and
            one physical science (Physical Science, Chemistry, Physics).{' '}
          </p>
          {classes.map(item => {
            return (
              <Highlight
                draggable="true"
                onDragStart={e => this.onDragStart(e, item.text, item.no)}
              >
                {item.text}
              </Highlight>
            )
          })}
        </div>{' '}
        <br />
        <br />
        <YearsContainer>
          <Row>
            <Col sm={3}>
              <Year onDragOver={this.allowDrop} onDrop={this.onDropFreshman}>
                <Class>
                  Freshman <p>{freshman[0]} </p>
                </Class>
              </Year>
            </Col>

            <Col sm={3}>
              <Year onDragOver={this.allowDrop} onDrop={this.onDropSophomore}>
                <Class>
                  Sophomore
                  <p>{sophomoreLabel}</p>
                </Class>
              </Year>
            </Col>

            <Col sm={3}>
              <Year onDragOver={this.allowDrop} onDrop={this.onDropJunior}>
                <Class>
                  Junior
                  <p>{juniorLabel}</p>
                </Class>
              </Year>
            </Col>

            <Col sm={3}>
              <Year onDragOver={this.allowDrop} onDrop={this.onDropSenior}>
                <Class>
                  Senior
                  <p>{seniorLabel}</p>
                </Class>
              </Year>
            </Col>
          </Row>
        </YearsContainer>
        <Button onClick={this.onClear}>Clear</Button>
        <a href="https://docs.google.com/document/d/1so2vutqu2dtXpqoWSK0IzLTDlMdy-MjIhqXyt6Xqb3A/edit">
          <Button>More Info</Button>
        </a>
      </CoursesContainer>
    )
  }
}

export default DragDrop
