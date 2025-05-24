
import app from "./app.js";
import assignmentRoutes from './routes/assignmentRoutes.js';



import usersRouter from "./router/usersRouter.js";
app.use("/api/users", usersRouter);
app.use('/api/v1/assignments', assignmentRoutes);

app.listen(process.env.PORT, () => {
    console.log( `Server listening on port ${process.env.PORT} `);
});




