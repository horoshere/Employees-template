### Учебный проект по React JS с использованием **Классовых компонент**.  


### Архитектура приложения построена в виде дерева компонентов между которыми перемещаются данные.  
```js

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
```  

### При чем данные находятся в главном компоненте **App**.  
```js

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
```    
### Внешний вид:  
![Screenshot_3](https://user-images.githubusercontent.com/85732162/169035472-39c350f1-a208-4f22-afe1-e3d0de457bd1.png)
