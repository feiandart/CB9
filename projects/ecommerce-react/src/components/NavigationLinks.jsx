// props sta per properties

// function signature = indicazione di ciò che ci serve per far funzionare la funzione

const NavigationLink = ({ href, text, handleClick }) => {

    return (
        <li onClick={handleClick} className="navigation--link">
            <a href={href}>{text}</a>
        </li>
    )
}

export default NavigationLink