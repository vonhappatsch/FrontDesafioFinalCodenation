import React, { Component } from 'react';
import imgTela from './assets/imgTela.png';
import logo from './assets/logo.png';

export default class Body extends Component {
    render() {
        return (

            <div className="login-body">
                
                <div className="row">
                    <div className="col-xs-12 col-lg-6 background-ivory login-mockup">
                        <img src={imgTela} className="img-fluid img-tela mx-auto d-block" alt="" />
                    </div>

                    <div className="col-xs-12 col-lg-6 text-center">
                        
                        <img src={logo} className="img-fluid img-logo mx-auto d-block" alt="" />
                        <h1>Central de Erros</h1>
                        <h2>Crie sua conta!</h2>

                        <form>
                            <div className="text-left">
                                <label for="email">E-mail</label>
                                <input type="email" className="" id="email" aria-describedby="emailHelp" placeholder=""></input>
                            </div>
                            <div className="text-left">
                                <label for="senha">Senha</label>
                                <input type="password" className="" id="senha" placeholder=""></input>
                            </div>
                            <a href="url">Já tenho cadastro e gostaria de entrar</a>
                            <button type="submit" class="button">Enviar</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}