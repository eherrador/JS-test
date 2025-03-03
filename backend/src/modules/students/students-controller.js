const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.status(200).json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const result = await getAllStudents(req.query);
    res.status(200).json(result);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const result = await getAllStudents(req.query);
    res.status(200).json(result);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const student = await getAllStudents(req.query);
    res.status(200).json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const result = await getAllStudents(req.query);
    res.status(200).json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
