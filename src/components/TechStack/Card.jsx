function Card({src, title}) {
    return (
        <div className="flex flex-col items-center">
            <img className='w-20 h-20' src={src} alt={title} />
            <h3 className='font-vhs'>{title}</h3>
        </div>
    );
}

export default Card;