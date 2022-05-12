import './RadioButton.css'

function RadioButton(props) {
  const { label, name, checked, onChange} = props

  return (
    <label className='RadioButton'>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

export default RadioButton