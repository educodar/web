import React from "react"
import SEO from "../components/SEO"

const HomePage = () => (
  <>
    <SEO />
    <div className="jumbotron">
      <h1>Aulas de programação grátis para jovens</h1>
      <p>
        <button className="btn">Button 1</button>
        <button className="btn">Button 2</button>
      </p>
    </div>
    <div>
      <ul className="striped-list">
        <li>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. <a href="#">Veja mais.</a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. <a href="#">Veja mais.</a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. <a href="#">Veja mais.</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </>
)

export default HomePage
