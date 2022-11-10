import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <iframe width="100%" height="500px" src="https://www.psu.edu/this-is-penn-state/mission-and-values/" />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
