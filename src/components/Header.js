import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }

  return (
    <div>
        <header className='header'>
            <h1 style={headingStyle}> {title} </h1>
            <Button color='green' text='Add' onClick = {onClick}/>
            <Button color='blue' text='Hello 1' />
            <Button color='red' text='Hello 3' />

        </header>
      
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tacker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//css in js
const headingStyle = {
    color: 'red',
    backgroundColor:"black"
}



export default Header
