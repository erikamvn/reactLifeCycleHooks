import React from 'react'

export default function Toggle (props) {
    const { onToggle, enabled, description } = props;
    const handleChange = (isChecked) => {
        onToggle(isChecked);
    }
    
    return (
    <div className="switch">
        <label>
            {description}
            <input type="checkbox" checked={enabled} onChange={handleChange} />
            <span className="lever"></span>
        </label>
    </div>
    );
}
