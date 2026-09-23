const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const courseRoutes = require("./Router/course.routes");
const enrollmentRoutes = require("./Router/enrollment.routes");
const lessonRoutes = require("./Router/lesson.routes");
const dashboardRoutes = require("./Router/dashboard.routes");
const progressRoutes = require("./Router/progress.routes")
dotenv.config();
const authRoute = require("./Router/userAuth.route");
const notFoundMiddleware =
    require("./Middleware/notFoundMiddleware");

const errorMiddleware =
    require("./Middleware/error.middleware");

const app = express();
app.use(express.json());
app.use("/api/user",authRoute);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/dashboard", dashboardRoutes); 

app.use(notFoundMiddleware);
app.use(errorMiddleware);

mongoose.connect(process.env.Mongo_URI).then(()=>{
    console.log("Connected to MongoDB");
});

app.listen(process.env.PORT,()=>{
    console.log('server is running on port 5000');
})