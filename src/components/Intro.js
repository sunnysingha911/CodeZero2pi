import React from "react"

const Intro = () => {
  return (
    <div className='main'>
      <div className='cover'>
        <div
          style={{
            width: "50%",
          }}>
          <h1 className='head'>
            Welcome to <span style={{ color: "#3660EA" }}>Landkit.</span>{" "}
          </h1>
          <h1 className='head'>Develop anything.</h1>
          <p className='p'>
            Build a beautiful, mordern website with flexible <br />
            Bootstrap components built from scratch
          </p>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
            }}>
            <button>View all pages</button>
            <button
              style={{
                background: "#EBEDFC",
                color: "#3861EA",
                marginLeft: "2rem",
              }}>
              Documentation
            </button>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img alt='photo' src='./images/pic1.png' />
        </div>
      </div>
    </div>
  )
}

export default Intro
