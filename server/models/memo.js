import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const memoSchema = new Schema({
    data: {
        created: { type: Date, default: Date.now },
        edited: { type: Date, default: Date.now }
    },
    contents: String,
    tags: []
});

const MemoModel = mongoose.model('Memo', memoSchema);

function write(req, res) {
    new MemoModel({
        contents: req.body.contents,
        tags: req.body.tags
    }).save((err, memo) => {
        if(err) {
            console.log(err);
            res.json({ _success: false });
        } else {
            res.json({ _success: true });
        }
    });
}

function list(req, res) {
    MemoModel.find((err, memos) => {
        if(err) {
            res.json({ _success: false });
        } else {
            memos._success = true;
            res.json(memos);
        }       
    });
}

function show(req, res) {
    MemoModel.findById(req.params.id, (err, memo) => {
        if(err) {
            res.json({ _success: false });
        } else {
            memo._success = true;
            res.json(memo);  
        }
    });
}

export default {
    write, list, show
};
