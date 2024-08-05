function Card({svg, title}) {
    return (
        <div className="flex flex-col items-center space-y-3">
            <img className='w-10 h-10 sm:w-14 sm:h-14' src={svg} alt={title} />
            <p className='text-xs md:text-md font-vhs'>{title}</p>
        </div>
    );
}

export default Card;