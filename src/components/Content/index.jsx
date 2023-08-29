import React, { useState } from 'react';
import styles from './Content.module.css';

const Content = () => {

const [peso, setPeso] = useState('');

const [altura, setAltura] = useState('');

const imcCalc = () => {

        if (altura >= 3) {
            return 'Dados Inválidos, uma forma correta seria assim, exemplo: peso: 65, altura: 1.73';
        }

        const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        if (isNaN(imc) || !isFinite(imc)) {
            return '';
        }

        return imc.toFixed(1);
    };

    const getImcCategory = (imc) => {
        if (imc < 16) {
            return 'Baixo peso Grau III';
        } else if (imc <= 16.99) {
            return 'Baixo peso Grau II';
        } else if (imc <= 18.49) {
            return 'Baixo peso Grau I';
        } else if (imc <= 24.99) {
            return 'Peso ideal';
        } else if (imc <= 29.99) {
            return 'Sobrepeso';
        } else if (imc <= 34.99) {
            return 'Obesidade Grau I';
        } else if (imc <= 39.99) {
            return 'Obesidade Grau II';
        } else {
            return 'Obesidade Grau III';
        }
    };

    const handleCalculate = () => {
        const imcValue = imcCalc();
        if (imcValue !== '') {
            alert(`Massa Corpórea ${imcValue} Nível do seu peso: ${getImcCategory(imcValue)}.`);
        }
    };

    return (
 <main className={styles.main}>
    <div className={styles.ttx}>
      <h2 className={styles.title}>Ponha seu peso e altura abaixo:</h2>
          <form>
                <input placeholder="Peso, clique aqui"  type="number" className={styles.input} value={peso} onChange={e => setPeso(e.target.value)} required />
                    <input placeholder="Altura, clique aqui" type="number" className={styles.input} value={altura} onChange={e => setAltura(e.target.value)} required />
                    <button className={styles.btn} type='button' onClick={handleCalculate}>Calcular</button>
                </form>
            </div>
<div className={styles.resp}>
<p className={styles.text}>Nível do seu peso: <b>{getImcCategory(parseFloat(imcCalc()))}</b></p>
                <p className={styles.text}>Massa corpórea: <b>{imcCalc()}</b></p>
                
            </div>
        </main>
    );
};

export default Content;