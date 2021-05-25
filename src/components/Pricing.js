import React from "react"
import "./pricing.css"

const card = (
  <div className='card'>
    <div
      style={{
        marginTop: "2rem",
        background: "#EBEDFC",
        color: "#607DEE",
        padding: "0.4rem 1rem",
        fontSize: "12px",
        borderRadius: "1rem",
        fontWeight: "700",
      }}>
      STANDARD
    </div>
    <h3 style={{ fontWeight: "400", fontSize: "36px", margin: "0px" }}>
      {" "}
      <sup>$</sup> 29 <sub>/mo</sub>
    </h3>
    <p>per seat</p>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div style={{ display: "flex", alignItems: "center" }} key={i}>
            <img alt='image' src='./images/tick.png' height={20} />
            <p>Rich responsive landing page</p>
          </div>
        ))}
    </div>
    <button
      style={{
        width: "100%",
        borderBottomLeftRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
      }}>
      Get it now
    </button>
  </div>
)

const card2 = (
  <div className='card2'>
    <div
      style={{
        marginTop: "2rem",
        background: "#EBEDFC",
        color: "#607DEE",
        padding: "0.4rem 1rem",
        fontSize: "12px",
        borderRadius: "1rem",
        fontWeight: "700",
      }}>
      ENTERPRISE
    </div>
    <center style={{ color: "#9DADC5", padding: "2rem" }}>
      We Offer Variable pricing with discounts for larger optimization. Get in
      touch with us and we will figure out sometning that works for you.
    </center>
    <button
      style={{
        width: "100%",
        background: "#D9E2EF",
        borderBottomLeftRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        color: "#61759B",
      }}>
      Contact Us
    </button>
  </div>
)

const Pricing = () => {
  return (
    <div className='pricing' style={{ marginTop: "5rem" }}>
      <div className='cardContainer'>
        {card} {card2}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                height: "7rem",
                margin: "1rem 0rem",
                width: "50%",
              }}>
              <span
                style={{
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "1.5rem",
                  width: "1.5rem",
                  background: "#52BA96",
                  marginRight: "1rem",
                }}>
                ?
              </span>
              <div className='qna'>
                <p style={{ color: "#fff", marginBottom: "0.5rem" }}>
                  Can I use Landkit for my childrens ?
                </p>
                <p style={{ color: "#8296B4" }}>
                  Absolutely. The Bootstrap themes license allows you to
                  <br />
                  build a website for a client
                </p>
              </div>
            </div>
          ))}
      </div>

      <center>
        <span
          style={{
            background: "#213055",
            color: "#475B84",
            padding: "0.5rem 2rem",
            borderRadius: "2rem",
          }}>
          Get Started
        </span>
        <h1 style={{ color: "#fff", fontWeight: "400" }}>
          Get Landkit and save your time
        </h1>
        <p style={{ color: "#7184A2" }}>
          Stop wasting time trying to do the "right way" and build a site from
          scratch <br />
          landkit is faster, easier, and you will still have complete control
        </p>
        <button
          style={{
            background: "#52BA96",
            color: "#fff",
            padding: "1rem 2rem",
          }}>
          Buy it now
        </button>
      </center>
    </div>
  )
}

export default Pricing
