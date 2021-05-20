function CareScale (props){
    const scaleValue = props.value;

    const range = [1, 2, 3];

    return (
    <div>
        {range.map(rangeElement =>
            scaleValue >= rangeElement ? <span key={rangeElement.toString()}>☀️</span> : null

        )}
    </div>

    )
}

export default CareScale