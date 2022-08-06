const { Router } = require("express");
const {
  add_expense,
  view_expense,
  view_expense_by_catergory,
  set_budget,
  view_expenses_in_range,
  delete_expense,
  get_budget,
  get_today_expense,
} = require("../controllers/expenseControllers");
const { requireAuth } = require("../middleware/authMiddleware");
const expenseRouter = Router();

expenseRouter.post("/addexpense", requireAuth, add_expense);
expenseRouter.get("/viewexpense", requireAuth, view_expense);
expenseRouter.get("/getdailyexpense", requireAuth, get_today_expense);
expenseRouter.post("/setbudget", requireAuth, set_budget);
expenseRouter.get("/getbudget", requireAuth, get_budget);
expenseRouter.get(
  "/viewexpense/:category",
  requireAuth,
  view_expense_by_catergory
);
expenseRouter.post("/viewexpenseinrange", requireAuth, view_expenses_in_range);
expenseRouter.get("/:id/deleteExpense", requireAuth, delete_expense);

module.exports = expenseRouter;
