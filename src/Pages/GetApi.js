import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import Header from "../components/Header"

const GetApi = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [dataError, setDataError] = useState()
  useEffect(() => {
    const cleanup = () => {
      setLoading(true)
      setData()
      setDataError()
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setLoading(false)
          setData(res.data)
          setDataError()
        })
        .catch((err) => {
          setDataError(err.message)
          setData()
          setLoading(false)
        })
    }
    return cleanup()
  }, [])

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {loading && <div style={{ margin: "3rem" }}>Loading...</div>}
        {data && (
          <table style={{ width: "50%" }}>
            <thead className='tabHeader'>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {dataError && <div>Error in fetching data</div>}
      </div>
    </>
  )
}

export default GetApi
