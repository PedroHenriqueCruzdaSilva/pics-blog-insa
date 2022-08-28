import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/fp.css'

export default function FeaturedPost() {
    return (
        <Link to="/Racismo-Estrutural">
            <div className='fp'>
                <div>
                    <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjR9VFtCkojb3gU2WHpVZ_elnfLZFjKCEBXA&usqp=CAU" alt="racismo estrutural imagem" />
                </div>

                <div className='direito'>
                    <p className='data'>28 de Agosto de 2022</p>

                    <h2 className='nome'>Racismo Estrutural</h2>

                    <p className='descricao'>
                        Está enraizado na estrutura social e orienta as relações institucionais, econômicas, culturais e políticas. No Brasil, em relação aos negros...
                    </p>

                    <div className='autor'>
                        <p className='Franco'>Feito por Guilherme Franco</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
