const constants = require("../../utilities/constants");
var db = require("../../models/index");

const { task } = db;

const getAllTasks = async (req, res) => {
  try {
    const tasks = await task.findAll();
    res.status(constants.OK_CODE).send({ tasks });
  } catch (error) {
    return res.status(constants.ERROR_CODE).send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    const taskData = await task.create({
      name,
    });
    return res.status(constants.OK_CODE).send({ task: taskData });
  } catch (error) {
    return res.status(constants.ERROR_CODE).send(error);
  }
};

const bulkdDeletTasks = async (req, res) => {
  try {
    const { taskIds } = req.body;
    const resData = await task.destroy({
      where: { id: taskIds },
    });
    return res.sendStatus(constants.OK_CODE).send(resData);
  } catch (error) {
    console.log("eroror", error);
    return res.sendStatus(constants.ERROR_CODE).send(error);
  }
};

module.exports = {
  bulkdDeletTasks,
  createTask,
  getAllTasks,
};
