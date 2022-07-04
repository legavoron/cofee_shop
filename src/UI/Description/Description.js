import './Description.css';

const Description = ({maxWidthDescription, value}) => {

    const maxWidth = {
        maxWidth: maxWidthDescription
    }

    return (
        <div className="Description" style={maxWidth}>
            <h3 className="descriptionValue">
                {value}
            </h3>
        </div>
    )
}

export default Description;