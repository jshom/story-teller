const runReading = (elementId, text, closer, startLine) => {
  const lines = text.split('\n')
  const doLine = lineIndex => {
    if (lineIndex === lines.length) return document.getElementById(elementId).innerHTML = closer
    const curLine = lines[lineIndex]
    // :: write the text
    const doLetter = (letterIndex, clb) => {
      if (letterIndex === curLine.length + 1) return clb()
      const timePerKeyStroke = (Math.random()*1000 + 0.2)/5
      window.setTimeout(() => {
        document.getElementById(elementId).innerHTML = curLine.slice(0, letterIndex)
        doLetter(letterIndex + 1, clb)
      }, timePerKeyStroke)
    }
    // :: delete the text
    const deleteLetter = (letterIndex, clb) => {
      if (letterIndex === curLine.length + 1) return clb()
      const timePerKeyStroke = (Math.random()*1000 + 0.1)/25
      window.setTimeout(() => {
        document.getElementById(elementId).innerHTML = curLine.slice(0, curLine.length - letterIndex)
        deleteLetter(letterIndex + 1, clb)
      }, timePerKeyStroke)
    }
    // :: run and wait at the end of each written line
    doLetter(1, () => {
      setTimeout(() => {
        deleteLetter(1, () => {
          doLine(lineIndex + 1)
        })
      }, 1000)
    })
  }
  doLine(startLine)
}

runReading(config.elementId, config.story, config.closer, config.startLine)
