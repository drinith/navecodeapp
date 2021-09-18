if (process.env.NODE_ENV == 'production') {

    module.exports = {
        
        serverApi:"xxxxxx"

    };
}
else if (process.env.NODE_ENV == 'test') {
    module.exports = {
        
        
        serverApi:'teste'


    };

}
else{
    module.exports = {
        
        //serverApi:'localhost:4000'
        serverApi:'navecode.herokuapp.com'

    };

}