
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salary1k', label: 'З/П больше 1к$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = name === props.filter; 
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;