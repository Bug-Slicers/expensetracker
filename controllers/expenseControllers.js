const Expense = require("../models/expense");
const User = require("../models/user");
var moment = require("moment");

module.exports.add_expense = async (req, res) => {
  let { date, amount, desc, category } = req.body;
  if (!date) {
    date = new Date();
  }
  if (!category) {
    category = "General";
  }
  const id = req.user._id;
  if (date && amount && desc && category) {
    try {
      if (typeof date != "object") {
        date = new Date(date);
      }
      const expense = await Expense.create({
        id,
        date,
        amount,
        desc,
        category,
      });
      res.status(200).json({ expense });
    } catch (err) {
      console.log(err);
      res.status(404).json({ errors: { msg: "Something went wrong." } });
    }
  } else {
    res
      .status(404)
      .json({ errors: { msg: "Please Fill Amount and Description." } });
  }
};

module.exports.view_expense = async (req, res) => {
  const id = req.user._id;
  try {
    const expenses = await Expense.find({ id }).sort({ date: -1 });

    res.status(200).json({ expenses });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};

module.exports.get_today_expense = async (req, res) => {
  const id = req.user._id;
  try {
    let expenses = await Expense.find({ id }).sort({ date: -1 });
    let filterData = [];
    for (let i = 0; i < expenses.length; i++) {
      if (
        expenses[i].date.toString().substring(0, 15) ===
        moment().format("ddd MMM DD YYYY")
      ) {
        filterData.push(expenses[i]);
      }
    }
    Object.assign({}, filterData);
    res.status(200).json({ filterData });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};

module.exports.view_expense_by_catergory = async (req, res) => {
  const id = req.user._id;
  const category = req.params.category;
  try {
    const expenses = await Expense.find({ id, category }).sort({ date: -1 });
    res.status(200).json({ expenses });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};

module.exports.set_budget = async (req, res) => {
  const id = req.user._id;
  const { budget } = req.body;

  if (budget) {
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { budget },
        { upsert: true }
      );
      res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      res.status(404).json({ errors: { msg: "Something went wrong." } });
    }
  } else {
    res.status(400).json({ errors: { msg: "Please enter budget." } });
  }
};

module.exports.view_expenses_in_range = async (req, res) => {
  const id = req.user._id;
  let { startdate, enddate } = req.body;
  startdate = new Date(startdate);
  enddate = new Date(enddate);
  try {
    const expense = await Expense.find({
      id,
      date: { $gte: startdate, $lte: enddate },
    }).sort({ date: -1 });
    res.status(200).json({ expense });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};

module.exports.get_budget = async (req, res) => {
  const id = req.user._id;
  try {
    const user = await User.findById(id);
    res.status(200).json({ budget: user.budget });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};

module.exports.delete_expense = async (req, res) => {
  const id = req.params.id;
  try {
    const expense = await Expense.findByIdAndDelete(id);
    res.status(200).json({ expense });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};
