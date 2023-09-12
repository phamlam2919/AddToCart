const db = require("../utils/db");
module.exports.filterByCategory = async (req, res, next) => {
    let { category } = req.query;
    try {
        let result = await db.execute(
            `
      SELECT p.product_id, p.name as product_name, p.number, 
      p.price, p.sale, c.name as description_name, c.description, c.banner FROM product as p
      INNER JOIN category as c
      ON p.category_id = c.category_id
      WHERE c.name = ?
      `,
            [category]
        );
        let [rows] = result;
        if (rows.length === 0) {
            next();
        } else {
            res.status(200).json(rows);
        }
    } catch (error) {
        res.status(500).json({
            error,
        });
    }
};
