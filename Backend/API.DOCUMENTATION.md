base url = http://localhost:5000
1. Register Student = POST /api/auth/register
body = {
    "name": "Rupali",
    "email": "rupali@gmail.com",
    "password": "123456"
}

2. Login = POST /api/auth/login
body = {
    "email": "rupali@gmail.com",
    "password": "123456"
}

3. | Method | Endpoint              | Access |
| ------ | --------------------- | ------ |
| POST   | `/api/courses/create` | Admin  |
| GET    | `/api/courses/all`    | Public |
| GET    | `/api/courses/:id`    | Public |
| PUT    | `/api/courses/:id`    | Admin  |
| DELETE | `/api/courses/:id`    | Admin  |

4. Enrollment APIs
Method	Endpoint	Access
POST	/api/enrollments/:courseId	Student
GET	/api/enrollments/my-courses	Student

5. | Method | Endpoint                        | Access             |
| ------ | ------------------------------- | ------------------ |
| POST   | `/api/lessons/:courseId`        | Admin              |
| GET    | `/api/lessons/course/:courseId` | Authenticated User |

6. | Method | Endpoint                            | Access  |
| ------ | ----------------------------------- | ------- |
| POST   | `/api/progress/:courseId/:lessonId` | Student |
| GET    | `/api/progress/:courseId`           | Student |

7. | Method | Endpoint                 | Access  |
| ------ | ------------------------ | ------- |
| GET    | `/api/dashboard/student` | Student |
| GET    | `/api/dashboard/admin`   | Admin   |

8. Authorization: Bearer YOUR_JWT_TOKEN