function Button(props) {
    return (
        <button className="border-2 border-text w-28 sm:w-48 md:w-64 h-10 font-caviar text-text bg-background transition-all duration-300 transform hover:bg-text hover:text-background hover:-translate-y-1">
            {props.text}
        </button>
    );
}

export default Button;
