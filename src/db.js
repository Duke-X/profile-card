import {mongoose} from 'mongoose';

mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB Connected")).catch((err) => console.log(err));

const ProfileSchema = new mongoose.Schema({
    image : String,
    designation : String,
    company : String,
    resumeLink : String,
    linkedin : String,
    insta : String,
    github : String,
    spotify : String,
    portfolio : String,
    bgColor : String,
    fontStyle : String
})

const profileModel = mongoose.model("Profile", ProfileSchema);

module.exports = {
    profileModel
}