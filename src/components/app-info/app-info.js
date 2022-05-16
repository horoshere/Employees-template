
import './app-info.css'

const AppInfo = ({lengthEmployees, increased}) => {
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании horoshere Inc</h1>
            <h2>Общее число сотрудников: {lengthEmployees} </h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;