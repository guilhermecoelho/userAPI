import setupApp from './src/app';


setupApp()
    .then(app =>
        app.listen(3001, () => {
            console.log('running on port 3001');
        }))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
