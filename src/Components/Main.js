import { Component } from 'react'
import './estilos.css'
class Main extends Component{
    render(){
        const contenido = this.props.children
        return(
            <div className='main-component'>
                <p>Main </p>
                <p>{ contenido }</p>
            </div>
            
        )
    }
}

export default Main