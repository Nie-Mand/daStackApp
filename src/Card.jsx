

const Card = ({name, src, title, category}) => {
    return (
        <div className="card m-3 h-10" style={{width: "18rem"}} >
            <img src={src} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text">{title}</p>
            </div>
        </div>
    )
}

export default Card