
import { Component } from 'react/cjs/react.production.min';
import './app-filter.css';

class AppFilter extends Component {
    constructor (props) {
        super(props);
        this.clazz = "btn btn-outline-light";
        this.activeClazz = "btn-light"

    }

    onFilter = (e) => {
       const filter = e.currentTarget.getAttribute('data-filter');
       e.currentTarget.classList.add("btn-light");
       e.currentTarget.classList.remove('btn-outline-light');
       this.props.onFilter(filter)
    }
    
    render() {
        return (
            <div className="btn-group">
                <button 
                    className={this.clazz}
                    type="button"
                    data-filter='all'
                    onClick={this.onFilter}>
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    data-filter='rise'
                    onClick={this.onFilter}>
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    data-filter='salary1k'
                    onClick={this.onFilter}>
                        З/П больше 1к$
                </button>
            </div>
        );
    }
}

export default AppFilter;