

module.exports=function(app){
    app.get("/",function(req,res){
        res.render('index');
    });
    
    app.get('/partials/*',function(req,res){
			res.render('partials/' + req.params[0]);
	});
}

