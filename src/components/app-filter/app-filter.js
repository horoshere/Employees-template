
import { Component } from 'react/cjs/react.production.min';
import './app-filter.css';

class AppFilter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onFilter = (e) => {
       const filter = e.currentTarget.getAttribute('data-filter');
       this.setState({filter});
       this.props.onFilter(filter)
    }
    
    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
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