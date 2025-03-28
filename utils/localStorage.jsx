const employees = [  
    {
      "id": 1,
      "firstName": "Aryan",
      "email": "Aryan@me.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare Sales Report",
          "description": "Compile the sales data for Q1 and prepare a detailed report.",
          "date": "2025-03-15",
          "category": "Reporting",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Schedule Client Meeting",
          "description": "Arrange a meeting with the new client to discuss project requirements.",
          "date": "2025-03-16",
          "category": "Meetings",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update CRM Database",
          "description": "Ensure all customer records are updated in the CRM system.",
          "date": "2025-03-17",
          "category": "Data Entry",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCount": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
    },
    {
      "id": 2,
      "firstName": "Gaurav",
      "email": "Gaurav@me.com",
      "password": "123",
      "tasks": [
        {
          "title": "Fix Website Bugs",
          "description": "Resolve reported UI/UX issues on the company website.",
          "date": "2025-03-18",
          "category": "Development",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Optimize SEO",
          "description": "Improve the SEO score of the company website.",
          "date": "2025-03-19",
          "category": "Marketing",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Prepare Marketing Plan",
          "description": "Draft a marketing plan for the upcoming quarter.",
          "date": "2025-03-20",
          "category": "Marketing",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Design Social Media Ads",
          "description": "Create ad creatives for the new campaign.",
          "date": "2025-03-21",
          "category": "Design",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskCount": { "active": 2, "new_task": 1, "completed": 1, "failed": 2 }
    },
    {
      "id": 3,
      "firstName": "Sujal",
      "email": "Sujal@me.com.com",
      "password": "123",
      "tasks": [
        {
          "title": "Review Codebase",
          "description": "Perform a thorough code review for the latest update.",
          "date": "2025-03-22",
          "category": "Development",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Write Documentation",
          "description": "Document the new API endpoints for developers.",
          "date": "2025-03-23",
          "category": "Technical Writing",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Resolve Server Issues",
          "description": "Investigate and fix server downtime issue.",
          "date": "2025-03-24",
          "category": "IT Support",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Refactor Code",
          "description": "Improve code efficiency in the main module.",
          "date": "2025-03-25",
          "category": "Development",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskCount": { "active": 2, "new_task": 1, "completed": 1, "failed": 1 }
    },
    {
      "id": 4,
      "firstName": "Sachin",
      "email": "Sachin@me.com",
      "password": "123",
      "tasks": [
        {
          "title": "Conduct Employee Training",
          "description": "Train new employees on internal software.",
          "date": "2025-03-26",
          "category": "HR",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Organize Office Event",
          "description": "Plan and coordinate the annual team-building event.",
          "date": "2025-03-27",
          "category": "HR",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Recruitment Drive",
          "description": "Shortlist and interview candidates for open positions.",
          "date": "2025-03-28",
          "category": "HR",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskCount": { "active": 3, "new_task": 2, "completed": 1, "failed": 0 }
    },
    {
      "id": 5,
      "firstName": "Satyam",
      "email": "Satyam@me.com",
      "password": "123",
      "tasks": [
        {
          "title": "Manage Social Media",
          "description": "Schedule and publish content on social media platforms.",
          "date": "2025-03-29",
          "category": "Marketing",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Analyze Website Traffic",
          "description": "Generate and review traffic analytics for the website.",
          "date": "2025-03-30",
          "category": "Marketing",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Create Newsletter",
          "description": "Design and send out the monthly company newsletter.",
          "date": "2025-03-31",
          "category": "Content",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Blog",
          "description": "Write and publish a new article on the company blog.",
          "date": "2025-04-01",
          "category": "Content",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskCount": { "active": 2, "new_task": 1, "completed": 1, "failed": 1 }
    }
];
 
  
  

const admin =[{
    
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      
}]

export const setLocalstorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalstorage=()=>{
 const employees=  JSON.parse( localStorage.getItem('employees'))
 const admin=  JSON.parse( localStorage.getItem('admin'))
 return {employees,admin}
    
}