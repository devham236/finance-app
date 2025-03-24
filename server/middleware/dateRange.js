export function genDateRange(req, res, next) {
  const { selectedMonth } = req.query;

  if (!selectedMonth) {
    return res
      .status(400)
      .json({ error: "Missing selectedMonth query parameter." });
  }

  try {
    // Extract Month and Year
    const [monthStr, yearStr] = selectedMonth.split(" - ");
    const monthIndex = new Date(Date.parse(`${monthStr} 1`)).getMonth();
    const year = Number(yearStr);

    // Generate Start and End Dates
    const startDate = new Date(Date.UTC(year, monthIndex, 1, 0, 0, 0, 0));
    const endDate = new Date(
      Date.UTC(year, monthIndex + 1, 0, 23, 59, 59, 999)
    );

    // Attach to req object
    req.dateRange = { $gte: startDate, $lte: endDate };
    next();
  } catch (error) {
    res.status(500).json({ error: "Invalid date format." });
  }
}
