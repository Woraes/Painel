const B7Validator = {
    /**
     * Usando a notação de método do ES6.
     *
     * @param {Event} event
     */
    handleSubmit(event) {
        event.preventDefault();
   
        /**
         * Seleciona o formulário direto do event, assim funciona
         * independente do nome da variavel e para vários forms ao mesmo tempo.
         *
         * @var {HTMLFormElement}
         */
        const { target: formElement } = event;
  
        /**
         * Seleciona todos os inputs(inclusive select e textarea, já
         * que o código original não pegava) sem precisar do querySelector
         * e elimina o input/button que envia o form através do filter.
         *
         * @var {HTMLInputElement[]}
         */
        const inputs = [...formElement.elements].filter((input) => {
            return input.type !== 'submit';
        });
   
        /**
         * Nas próximas aulas esse código é usado para limpar os erros.
         *
         * @see https://alunos.b7web.com.br/curso/javascript/exibindo-o-erro
         */
        B7Validator.clearErrors();
   
        /**
         * Para evitar acumular muitas responsabilidades em um ponto só,
         * eu joguei a responsabilidade de validar para um método extra
         * chamado validate que recebe os inputs para validar e retorna um booleano
         * que simboliza se o form está validado ou não.
         */
        if (B7Validator.validate(inputs)) {
            formElement.submit();
        }
    },
    /**
     * Recebe os inputs a serem válidados, então é aplicado um map
     * para mapear os inputs em valores booleanos que representam
     * a se os mesmos são válidos ou não e no meio desse processo
     * de mapeamento, é executado o método de mostrar os erros na
     * tela criado na aula 3.
     *
     * No final esse array de booleans é passado para o método every,
     * que verifica se todo mundo é true e retorna um boolean que
     * representa se todos os inputs são válidos ou não.
     *
     * @param {HTMLInputElement[]} inputs
     * @returns {boolean}
     */
    validate(inputs) {
        return inputs
            .map((input) => {
                const check = B7Validator.checkInput(input);
                const isValid = check === true;
   
                if (!isValid) {
                    B7Validator.showError(input, check);
                }
   
                return isValid;
            })
            .every(Boolean);
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
  
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetails = rules[k].split('=');
                switch (rDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio.';
                        }
                        break;
                    case 'min':
                        if (input.value.length < rDetails[1]) {
                            return (
                                'Campo tem que ter pelo menos ' +
                                rDetails[1] +
                                ' caractes'
                            );
                        }
                        break;
                }
            }
        }
   
        return true;
    },
    showError: (input, error) => {
        input.style.borderColor = '#FF0000';
  
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
   
        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }
   
        let errorElements = document.querySelectorAll('.error');
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    },
};
    
/**
 * @var {HTMLFormElement}
 */
const form = document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);

