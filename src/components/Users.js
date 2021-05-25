import React from "react"
import "./users.css"
const Users = () => {
  return (
    <div
      style={{
        margin: "0rem 8rem",
        display: "flex",
        justifyContent: "space-between",
      }}>
      <div className='content'>
        <img alt='image' src='./images/img1.png' />
        <h3>Built for developers</h3>
        <p>
          Landkit is built to make your life easier.
          <br />
          Variables, build tooling, documentation,
          <br />
          and reusable components
        </p>
      </div>
      <div className='content'>
        <img alt='image' src='./images/img2.png' />
        <h3>Designed to be mordern</h3>
        <p>
          Designed with the latest design trends in
          <br />
          mind. landkit feels mordern, minimal
          <br />
          and beautiful
        </p>
      </div>
      <div className='content'>
        <img alt='image' src='./images/img3.png' />
        <h3>Documentation for everything </h3>
        <p>
          we have written extensive documentation
          <br />
          for components and tools, so you never
          <br />
          have to reverse engineer anything
        </p>
      </div>
    </div>
  )
}

export default Users
