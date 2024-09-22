
module.exports = function SortMiddleware (req, res, next) {

    // khoi tao gia tri default
    res.locals._sort = {
        enables: false,
        type: 'default',
        column: 'default',
    }

    if(req.query.hasOwnProperty('_sort')) {

        // res.locals._sort.enables = true;
        // res.locals._sort.type = req.query.type;
        // res.locals._sort.column = req.query.column;

        Object.assign(res.locals._sort, {
            enables: true,
            type: req.query.type,
            column: req.query.column,
        })
    }
    
    next();
}