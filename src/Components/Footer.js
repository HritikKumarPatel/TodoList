import React from 'react'

export default function Footer() {
    const style = {
        position:"relative",
        //backgroundColour:"black",
        color:"white",
        
    }
    return (
        <footer className="bg-dark py-2" style = {style}>
            <p>
                Copyright &copy; Todo List
            </p>
        </footer>
    )
}
