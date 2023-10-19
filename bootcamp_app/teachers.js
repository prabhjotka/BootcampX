const { Pool } = require('pg');

const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'bootcampx'
})
const cohortName = process.argv[2];
const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1 
ORDER BY teacher;
`;
pool.query(queryString, [cohortName])
.then(res => {
    res.rows.forEach(row => {
        console.log(`${row.cohort}: ${row.teacher}`);

    })
    pool.end();
}).catch(err => console.error('query error', err.stack));

