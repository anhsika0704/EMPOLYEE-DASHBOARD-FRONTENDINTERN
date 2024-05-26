import React from 'react';
import './MainContent.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
    const employees = [
      { rank: 1, name: 'Amit Sharma', designation: 'Manager', hoursWorked: '7(42)', changes: '1.5 hours' },
      { rank: 2, name: 'Sneha Patel', designation: 'Developer', hoursWorked: '7(38)', changes: '1.5 hours' },
      { rank: 3, name: 'Rahul Singh', designation: 'Designer', hoursWorked: '7(36)', changes: '1.5 hours' },
      { rank: 4, name: 'Priya Verma', designation: 'Developer', hoursWorked: '7(35)', changes: '1.5 hours' },
      { rank: 5, name: 'Vikram Chatterjee', designation: 'Analyst', hoursWorked: '7(34)', changes: '1.5 hours' },
      { rank: 6, name: 'Sunita Rao', designation: 'Manager', hoursWorked: '7(40)', changes: '1.5 hours' },
      { rank: 7, name: 'Arjun Kapoor', designation: 'Developer', hoursWorked: '7(37)', changes: '1.5 hours' },
      { rank: 8, name: 'Kavita Menon', designation: 'Designer', hoursWorked: '7(36)', changes: '1.5 hours' },
      { rank: 9, name: 'Rakesh Gupta', designation: 'Analyst', hoursWorked: '7(39)', changes: '1.5 hours' },
      { rank: 10, name: 'Neha Joshi', designation: 'Developer', hoursWorked: '7(35)', changes: '1.5 hours' },
    ];

  return (
    <main className="main-content">
        <div style={{
        display: 'flex',
        alignItems: 'center', // Align items vertically
        marginBottom: '10px', // Optional: Add margin below the heading
      }}>
        <FontAwesomeIcon icon={faCircle} style={{ color: 'blue' , marginRight:'5px' , fontSize: '24px'  }} />
      <h2>Employee Hours Worked</h2>
    </div>
      
      <table>
        <thead>
          <tr>
            <th className="rank-heading">Rank</th>
            <th>Name</th>
            <th>Designation</th>
            <th>No. of Hours Worked</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.rank}>
              <td className="rank-cell">
                {employee.rank <= 3 ? (
                  <>
                    <i className="fas fa-trophy" style={{ color: employee.rank === 1 ? 'gold' : employee.rank === 2 ? 'silver' : 'bronze' }}></i>
                    <span>{employee.rank}</span>
                  </>
                ) : (
                  <span className="no-icon">{employee.rank}</span>
                )}
              </td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.hoursWorked}</td>
              <td className="changes-cell">
                
              <div className={`triangle ${index % 2 === 0 ? 'up' : 'down'}`}></div>
                {employee.changes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default MainContent;
