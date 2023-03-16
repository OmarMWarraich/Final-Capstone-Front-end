import PropTypes from 'prop-types';
import './FileUpload.css';

const Input = ({
  label, type, value, onChange,
}) => (
  <div className="input">
    <label
      htmlFor={label}
    >
      {label}
    </label>
    <input
      type={type}
      onChange={onChange}
      value={value}
      required
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
