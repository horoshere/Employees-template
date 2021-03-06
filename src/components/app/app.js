import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Carl J.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Danny W.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Alex M.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState (({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // let before = data.slice(0, index);
            // let after = data.slice(index + 1);
            // let newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState (({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onChangeSalary = (name, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.name === name) {
                    return {...item, salary}
                }
                return item;
            })
        }))
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};

        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item; //???????? ?????????????? ???? ?????????????? - ???????????????????? ???????? ????????????
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        if(filter === 'rise') {
            return items.filter(item => item.rise)
        } else if (filter === 'salary1k') {
            return items.filter(item => item.salary > 1000)
        } else return items
    }

    onFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const lengthEmployees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo lengthEmployees={lengthEmployees}
                increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilter={this.onFilter}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                onChangeSalary={this.onChangeSalary}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;