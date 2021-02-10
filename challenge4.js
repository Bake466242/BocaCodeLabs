
function FullName({person}) {
    const { firstName, lastName } = person
    return (
        <h1>{firstName}, {lastName}</h1>
    )
}

//or

export default function FullName({person}) {
    return <h1>{person.firstName}&nbsp{person.latName}</h1>
}

//or 

export default function FullName({person}) {
    const { firstName, lastName } = person
    return <h1>{`${firstName} ${lastName}`}</h1>
}