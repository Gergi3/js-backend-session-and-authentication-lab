const Example = require('../models/Example');

exports.getAll = () => Example.find({});