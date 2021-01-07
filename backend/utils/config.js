const config={
    url:process.env.MONGODB_URI||"mongodb+srv://scion:scion@cluster0.ga3qa.mongodb.net/blog?retryWrites=true&w=majority",
poolsize:10

}
module.exports=config;