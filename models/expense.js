const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    date: {
      type: Date,
    },
    amount: {
      type: mongoose.Types.Decimal128,
      required: [true, "Please Enter Amount for Expense"],
    },
    desc: {
      type: String,
      required: [true, "Please Enter Description for Expense"],
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("expense", expenseSchema);
module.exports = Expense;
