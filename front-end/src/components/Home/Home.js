//import { Link } from 'react-router-dom'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Home = props => {
  return (
    <>
      <h1>Home Screen!</h1>
      <p>Welcome to QuizVerse!</p>
    </>
  )
}

// make this component available to be imported into any other file
export default Home