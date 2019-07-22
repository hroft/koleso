const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const KolesoSchema = new mongoose.Schema({
    Article: {
        type: String,
        trim: true
    },
    Serial: {
        type: String,
        trim: true
    },
    Construction: {
        type: String,
        trim: true
    },    
    Protector: {
        type: String,
        trim: true
    },
    Size1: {
        type: String,
        trim: true
    },
    Size_3: {
        type: String,
        trim: true
    },
    Size: {
        type: String,
        trim: true
    },
    Disk: {
        type: String,
        trim: true
    },
    Zamok: {
        type: String,
        trim: true
    },
    BRAND: {
        type: String,
        trim: true
    },
    NagrShina6:{
        type: Number,
        default: 0
    },
    NagrShina10:{
        type: Number,
        default: 0
    },
    NagrShina25:{
        type: Number,
        default: 0
    },
    NagrMaster25:{
        type: Number,
        default: 0
    },
    NagrSlave25:{
        type: Number,
        default: 0
    },
    Diametr:{
        type: Number,
        default: 0
    },
    Widht:{
        type: Number,
        default: 0
    },
    Price: {
        type: String,
        trim: true
    },
    PriceOpt: {
        type: String,
        trim: true
    },
    Name1: {
        type: String,
        trim: true
    },
    Tech: {
        type: String,
        trim: true
    },
    SubscrideShort: {
        type: String,
        trim: true
    },
    SubscrideLong: {
        type: String,
        trim: true
    },
    SetupExp: {
        type: String,
        trim: true
    },
    Feature: {
        type: String,
        trim: true
    },
    Photo: {
        type: [String]
    },
});

KolesoSchema.plugin(timestamp);

const Koleso = mongoose.model('Koleso', KolesoSchema);
module.exports = Koleso;


