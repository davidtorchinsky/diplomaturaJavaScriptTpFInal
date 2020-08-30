"use strict";

import Meme from "../Models/meme";

function getMemes(req, res) {
    Meme.find({}, function(err, memes) {
        if (err) {
            return res.status(400).json({
                title: "Error bad request",
                error: err,
            });
        }
        if (!memes) {
            return res.status(404).json({
                title: "Error not found",
                error: err,
            });
        }
        res.status(200).json({
            message: "Success",
            obj: memes,
        });
    });
}
// EXPORT
module.exports = {
    getMemes,
};