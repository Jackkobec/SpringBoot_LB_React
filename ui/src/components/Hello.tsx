import * as React from "react";
import {get} from "../config/backend";

type HelloState = {//это наш стейт
    name?: string;//каждое поле - это стейт
    lastName?: string;//каждое поле - это стейт
}

type Props = {//это пропсы
    lala: string;
};

//React.Component<Props, HelloState>
//первый аргумент - пропсы у нас Props, второй - стейт у нас HelloState
export class Hello extends React.Component<Props, HelloState> {
    constructor(props) {//конструктор, принимающий пропсы, так пишется props
        super(props);//игинциализация пропсов суперкласса для дальнейшего использования

        this.state = {//заполнение полей стейта из пропсов
            name: props.lala,//заполнение полей стейта из пропсов, тут name заполняется из пропсов lala
            // name: null
            lastName: 'lastName'
        }
    }


    //Если не планируется юзать пропсы и заполнять ими поля стейта
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         name : ''
    //         // name: null
    //}


    //
    // state: HelloState =  { name: '' };

    //обязательный метод render
    render() {
        //декларация константы {name} заполняя её всем стецтом this.state,
        //
        //var - устарело, можно переназначать
        //let - локальная область видимости, можно переназначать
        //const - нельзя переназначать
        /*const {name, lastName} = this.state;*///заполнение по указанным полям стейта

        const r = {...this.state};//автоматическое заполнение переменной r по соовествующим полям стейта

        /*<h1>Hello, { this.props.lala } !</h1>*/

        //вызов полей стейта напрямую, предпочтительнее для читабельности
        // <h1>Hello, { this.state.name } !</h1>
        return (
            /**
             * Экшены типо onChange, onBlur могут висеть друг за другом и вызываться по своему назначению.
             *
             * Синтаксис на примере onChange, обернутый в <input/>:
             *  <input onChange={ e => this.setState({name: (e.target as HTMLInputElement).value}) } />
             *  означает, что во время изменения в поле input в браузере, будет происходить изменение
             *  этого стейта this.setState, в скобках указаывается что именно будет меняться:
             *  ({name: (e.target as HTMLInputElement).value})
             *  в name будет записываться значение из value тега <Input/>
             *
             * Синтаксис на примере onBlur, обернутый в том же <Input/>, что и предыдущий onChange:
             <input
             onChange={ e => this.setState({name: (e.target as HTMLInputElement).value}) }
             onBlur={ () => {
                        console.log('sss');
                        this.triggerValidation('name')
                    } }
             />
             означает, что при смене фокусас поля input будет вызван метод triggerValidation(fieldName),
             в который в качестве параметра будет передано наше  в виде строки т.к. аргумент метода
             не типизирован. Далее этот 'name' будет проверен на пксое значение и если так, то
             в поле стейта fieldName, которое name запишется 'triggerValidation worked'тж
             */
            <div>
                <h1>Hello, { this.state.name } !</h1>

                <h1>Hello, { r.name } !</h1>
                <h1>Hello, { r.lastName } !</h1>

                <input
                    onChange={ e => this.setState({name: (e.target as HTMLInputElement).value}) }
                    onBlur={ () => {
                        console.log('sss');
                        this.triggerValidation('name')
                    } }
                />
                <br></br>
                <input value={"Value"} onChange={() => {}}/>
            </div>
        );
    }

    // componentWillUpdate(nextProps, nextState) {
    //     if (this.state.name != nextState.name) {
    //         if (nextState.name.length > 8) {
    //             nextState.name = 'Длинное слово';
    //         }
    //     }
    // }

    // Validation
    triggerValidation(fieldName) {
        // if ( this.state[ fieldName ] == null ) {
        if (this.state[fieldName] == "") {
            this.setState({[fieldName]: 'triggerValidation worked'});
        }
    }
}
