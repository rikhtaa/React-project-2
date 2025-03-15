import styles from  './Button.module.css'
// getting props from Form.jsx  and here destrucuting it
const Button = ({isOutline, icon, text, ...rest}) => {
  return (
    <button
    {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}>
    {icon}
    {text}
    </button>
  )
}

export default Button