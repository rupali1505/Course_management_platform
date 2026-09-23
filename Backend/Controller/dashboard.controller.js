const dashboardService = require("../Services/dashboard.service");

const getStudentDashboard = async (req, res) => {

    try {

        const studentId = req.user.userId;

        const dashboard =
            await dashboardService.getStudentDashboard(studentId);

        res.status(200).json({
            status: true,
            msg: "Student dashboard fetched successfully",
            dashboard
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to fetch dashboard",
            error: error.message
        });

    }
};

const getAdminDashboard = async (req, res) => {

    try {

        const dashboard =
            await dashboardService.getAdminDashboard();

        res.status(200).json({
            status: true,
            msg: "Admin dashboard fetched successfully",
            dashboard
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to fetch admin dashboard",
            error: error.message
        });

    }
};

module.exports = {
    getStudentDashboard,
    getAdminDashboard
};