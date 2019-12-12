const indexRouter = require('../routes/index');
const aboutRouter = require('../routes/about');
const ayudarRouter = require('../routes/ayudar');
const talleresRouter = require('../routes/talleres');
const loginRouter = require('../routes/login');
const programasRouter = require('../routes/programas');
const devsRouter = require('../routes/devs');
const dashboardRouter = require('../routes/dashboard');

const createError = require('http-errors');

module.exports = function(app) {
    try{
        app.use('/', indexRouter);
        app.use('/about', aboutRouter);
        app.use('/ayudar', ayudarRouter);
        app.use('/talleres', talleresRouter);
        app.use('/programas', programasRouter);
        app.use('/developers', devsRouter);
        app.use('/login', loginRouter);
        app.use('/dashboard', dashboardRouter);

        // catch 404 and forward to error handler
        app.use((req, res, next) => {
            next(createError(404));
        });
        // error handler
        app.use('*', (err, req, res, next) => {
            // set locals, only providing error in development
            // render the error page
            res.status(err.status || 500);
            res.render('error404');
        });
    }
    catch(e){
        let message = {
            errorCode: "Routes Error"
        }
        if(!e){
            message['Error'] = e.message;
        }
        console.log(message)
    }

  
}