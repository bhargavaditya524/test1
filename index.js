import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import EmployeeModel from './Models/Employee.js';
const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/employee');
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email})
       .then(user=>{
        if(user){
            if(user.password === password){
                res.json("success")
        }
        else{
            res.json("then password is incorrcet")
        }

       }
    else{
        res.json("user not registered")
    }
})
});
app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})
 
app.listen(3001, () => {
    console.log('Server is running on port 3000');
}); 