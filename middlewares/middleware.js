const firstMiddleWare = (req,res,next)=> {

    console.log('First opeartion');
    next();
}



module.exports = firstMiddleWare;