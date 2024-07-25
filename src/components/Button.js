import '../css/button.css'

const Button = ({ className, value, click}) => {
  return (
    <button className={className} onClick={click}>
      {value}
    </button>
  )
}

export default Button