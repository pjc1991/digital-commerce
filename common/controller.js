exports.getIndex = (req, res) => {
    res.render('common/index', {
        title: 'Home'
    });
};