import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/post.css'

export default function PostList() {
    return (
        <body>
        <div className='Po'>
            <Link to="/Racismo-Na-Internet">
                <div className='p1'>
                    <div>
                        <img className='imgp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m5sSrucuLl42X9O_X0bfEaJcVbVQUQEB6oG78LBWm3OFu1ONEsMz1nJ9tMYcZYiS5u8&usqp=CAU" alt="racismo na internet imagem" />
                    </div>

                    <div className='direito'>
                        <p className='datap'>27 de Agosto de 2022</p>

                        <h2 className='nomep'>Racismo Na Internet</h2>

                        <p className='descricaop'>
                        A internet tem servido de palco para o ódio às diferenças. As manifestações de racismo e injúria racial nas redes sociais escancaram a realidade preconceituosa que ainda existe no Brasil, alimentadas pela ideia de que a internet seria um território sem lei...
                        </p>

                        <div className='autor'>
                            <p className='Franco'>Feito por Lucaz Zultini</p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/Racismo-Escolar">
                <div className='p'>
                    <div>
                        <img className='imgp' src="data:image/jpeg;base64,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" alt="racismo Escolar imagem" />
                    </div>

                    <div className='direito'>
                        <p className='datap'>26 de Agosto de 2022</p>

                        <h2 className='nomep'>Racismo Escolar</h2>

                        <p className='descricaop'>
                            Está enraizado na estrutura social e orienta as relações institucionais, econômicas, culturais e políticas. No Brasil, em relação aos negros...
                        </p>

                        <div className='autor'>
                            <p className='Franco'>Feito por João Góes</p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/Racismo-No-Esporte">
                <div className='p1'>
                    <div>
                        <img className='imgp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRI7Fw_TQ0ucXPM4Ph-JUywDOJd0VTBZndobbq6VTByOoxj5vHZK7b_dcata3MrzVlxs&usqp=CAU" alt="racismo no esporte imagem" />
                    </div>

                    <div className='direito'>
                        <p className='datap'>25 de Agosto de 2022</p>

                        <h2 className='nomep'>Racismo dentro do Esporte</h2>

                        <p className='descricaop'>
                            Ultimamente os casos de racismo vem aumentando cada vez mais, sendo assim não seria diferente nos esporte que esta tendo...
                        </p>

                        <div className='autor'>
                            <p className='Franco'>Feito por David Barros</p>
                        </div>
                    </div>
                </div>
            </Link>
            <a href="https://youtu.be/sT46RVcC_Pg">
            <div className='p'>
                        <div>
                            <img className='imgp' src="https://i0.wp.com/blog.pandape.com.br/wp-content/uploads/2022/01/7566.jpg?resize=678%2C424&ssl=1" alt="Em Breve" />
                        </div>

                        <div className='direito'>
                            <p className='datap'>29 de Agosto de 2022</p>

                            <h2 className='nomep'>Entrevista</h2>

                            <p className='descricaop'>
                                ----------------------------------
                            </p>

                            <div className='autor'>
                                <p className='Franco'> João Góes e Lucaz Zultini</p>
                            </div>
                        </div>
                    </div>
                </a>
                <div className='p1'>
                    <div>
                        <img className='imgp' src="data:image/jpeg;base64,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" alt="Em Breve" />
                    </div>

                    <div className='direito'>
                        <p className='datap'>-------------------------------------------------------------------------------------------------------</p>

                        <h2 className='nomep'>Em Breve</h2>

                        <p className='descricaop'>
                            Tera uma Proxima Noticia Futuramente
                        </p>

                        <div className='autor'>
                            <p className='Franco'></p>
                        </div>
                    </div>
                </div>
        </div>
        </body>
    )
}
