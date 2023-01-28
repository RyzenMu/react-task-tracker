import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    // const onClick = () => {
    //     console.log('click');
    // }
  return <button style={{background: color}} className='btn' onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    color: 'steel blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
